import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const title = 'Fansten';
const description = 'Fansten is a platform where fans support athletes during and after sports events.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: title,
  openGraph: {
    title,
    description,
    type: 'website'
  },
  twitter: {
    title,
    description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
