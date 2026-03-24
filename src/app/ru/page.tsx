import type { Metadata } from 'next';

import { LandingPage } from '@/components/landing/LandingPage';
import { getLandingMetadata } from '@/components/landing/content';

export const metadata: Metadata = getLandingMetadata('ru');

export default function RuPage() {
  return <LandingPage locale="ru" />;
}
