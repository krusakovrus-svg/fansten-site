import { NextResponse } from 'next/server';

import { appendWaitlistRow } from '@/lib/googleSheets';
import {
  isWaitlistContactType,
  validateWaitlistPayload,
  type WaitlistPayload
} from '@/lib/waitlist';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: WaitlistPayload;

  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { normalized, fieldErrors } = validateWaitlistPayload(payload);

  if (Object.keys(fieldErrors).length > 0 || !isWaitlistContactType(normalized.contactType)) {
    return NextResponse.json(
      {
        error: 'Validation failed.',
        fieldErrors
      },
      { status: 400 }
    );
  }

  try {
    await appendWaitlistRow({
      locale: normalized.locale,
      contactType: normalized.contactType,
      name: normalized.name,
      phone: normalized.phone,
      email: normalized.email,
      sourcePage: normalized.sourcePage
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Waitlist submission failed', error);

    return NextResponse.json(
      {
        error: 'Waitlist submission is temporarily unavailable.'
      },
      { status: 500 }
    );
  }
}
