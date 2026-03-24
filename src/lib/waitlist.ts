export const WAITLIST_CONTACT_TYPES = ['fan', 'athlete', 'partner', 'company'] as const;

export type WaitlistContactType = (typeof WAITLIST_CONTACT_TYPES)[number];
export type WaitlistLocale = 'en' | 'ru';
export type WaitlistField = 'contactType' | 'name' | 'phone' | 'email';
export type WaitlistValidationIssue = 'required' | 'invalid_email' | 'invalid_phone' | 'invalid_contact_type';

export type WaitlistPayload = {
  contactType: string;
  name: string;
  phone: string;
  email: string;
  sourcePage?: string;
  locale?: string;
};

export const WAITLIST_CONTACT_TYPE_LABELS: Record<WaitlistLocale, Record<WaitlistContactType, string>> = {
  en: {
    fan: 'Fan / User',
    athlete: 'Athlete',
    partner: 'Partner',
    company: 'Company'
  },
  ru: {
    fan: 'Фанат / Пользователь',
    athlete: 'Спортсмен',
    partner: 'Партнёр',
    company: 'Компания'
  }
};

export function isWaitlistLocale(value: string | undefined): value is WaitlistLocale {
  return value === 'en' || value === 'ru';
}

export function isWaitlistContactType(value: string): value is WaitlistContactType {
  return WAITLIST_CONTACT_TYPES.includes(value as WaitlistContactType);
}

export function normalizeWaitlistPayload(payload: WaitlistPayload) {
  const locale = isWaitlistLocale(payload.locale) ? payload.locale : 'en';
  const contactType = payload.contactType.trim();
  const name = payload.name.trim();
  const phone = payload.phone.trim();
  const email = payload.email.trim().toLowerCase();
  const sourcePage = payload.sourcePage?.trim() || (locale === 'ru' ? '/ru' : '/');

  return {
    locale,
    contactType,
    name,
    phone,
    email,
    sourcePage
  };
}

export function validateWaitlistPayload(payload: WaitlistPayload) {
  const normalized = normalizeWaitlistPayload(payload);
  const fieldErrors: Partial<Record<WaitlistField, WaitlistValidationIssue>> = {};

  if (!normalized.contactType) {
    fieldErrors.contactType = 'required';
  } else if (!isWaitlistContactType(normalized.contactType)) {
    fieldErrors.contactType = 'invalid_contact_type';
  }

  if (!normalized.name) {
    fieldErrors.name = 'required';
  }

  if (!normalized.phone) {
    fieldErrors.phone = 'required';
  } else {
    const digits = normalized.phone.replace(/\D/g, '');
    if (digits.length < 6) {
      fieldErrors.phone = 'invalid_phone';
    }
  }

  if (!normalized.email) {
    fieldErrors.email = 'required';
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(normalized.email)) {
      fieldErrors.email = 'invalid_email';
    }
  }

  return {
    normalized,
    fieldErrors
  };
}
