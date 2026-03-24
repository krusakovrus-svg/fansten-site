import 'server-only';

import { google } from 'googleapis';

import {
  WAITLIST_CONTACT_TYPE_LABELS,
  type WaitlistContactType,
  type WaitlistLocale
} from '@/lib/waitlist';

const GOOGLE_SHEETS_SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];
const WAITLIST_HEADERS = ['Date', 'Contact type', 'Name', 'Phone', 'Email', 'Source page', 'Locale'];

type AppendWaitlistRowInput = {
  locale: WaitlistLocale;
  contactType: WaitlistContactType;
  name: string;
  phone: string;
  email: string;
  sourcePage: string;
};

function getGoogleSheetsConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const worksheetName = process.env.GOOGLE_SHEETS_WORKSHEET_NAME || 'Waitlist';
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error('Google Sheets waitlist integration is not configured.');
  }

  return {
    spreadsheetId,
    worksheetName,
    clientEmail,
    privateKey
  };
}

async function getSheetsClient() {
  const config = getGoogleSheetsConfig();
  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: GOOGLE_SHEETS_SCOPE
  });

  await auth.authorize();

  return {
    config,
    sheets: google.sheets({
      version: 'v4',
      auth
    })
  };
}

async function ensureWorksheetAndHeaders() {
  const { config, sheets } = await getSheetsClient();

  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: config.spreadsheetId,
    fields: 'sheets.properties.title'
  });

  const hasWorksheet = spreadsheet.data.sheets?.some(
    (sheet) => sheet.properties?.title === config.worksheetName
  );

  if (!hasWorksheet) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: config.spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: config.worksheetName
              }
            }
          }
        ]
      }
    });
  }

  const headerRange = `${config.worksheetName}!A1:G1`;
  const existingHeaders = await sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: headerRange
  });

  const firstRow = existingHeaders.data.values?.[0] ?? [];
  const needsHeaders =
    firstRow.length !== WAITLIST_HEADERS.length ||
    WAITLIST_HEADERS.some((header, index) => firstRow[index] !== header);

  if (needsHeaders) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: config.spreadsheetId,
      range: headerRange,
      valueInputOption: 'RAW',
      requestBody: {
        values: [WAITLIST_HEADERS]
      }
    });
  }

  return {
    sheets,
    spreadsheetId: config.spreadsheetId,
    worksheetName: config.worksheetName
  };
}

export async function appendWaitlistRow(input: AppendWaitlistRowInput) {
  const { sheets, spreadsheetId, worksheetName } = await ensureWorksheetAndHeaders();
  const contactTypeLabel = WAITLIST_CONTACT_TYPE_LABELS[input.locale][input.contactType];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${worksheetName}!A:G`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          contactTypeLabel,
          input.name,
          input.phone,
          input.email,
          input.sourcePage,
          input.locale
        ]
      ]
    }
  });
}
