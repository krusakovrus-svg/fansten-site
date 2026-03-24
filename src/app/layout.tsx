import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const bodyFont = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fansten.com'),
  applicationName: 'Fansten'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
