'use client';

import { useEffect } from 'react';

import type { LandingLocale } from '@/components/landing/content';

type LandingLocaleEffectProps = {
  locale: LandingLocale;
};

export function LandingLocaleEffect({ locale }: LandingLocaleEffectProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
