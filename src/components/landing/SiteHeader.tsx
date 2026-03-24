import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';
import { WaitlistTriggerButton } from '@/components/landing/WaitlistModalProvider';

interface SiteHeaderProps {
  xHref: string;
  copy: LandingCopy['header'];
}

export function SiteHeader({ xHref, copy }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <a className="brand" href="#top" aria-label={copy.ariaHome}>
            <span className="brand__icon">
              <Image src="/images/fansten-icon.png" alt="" width={40} height={40} />
            </span>
            <span>
              <span className="brand__wordmark">{copy.wordmark}</span>
              <strong className="brand__title">Fansten</strong>
            </span>
          </a>

          <nav className="site-nav" aria-label={copy.navAriaLabel}>
            <a className="site-nav__link" href="#what-is-fansten">
              {copy.nav.what}
            </a>
            <a className="site-nav__link" href="#how-it-works">
              {copy.nav.how}
            </a>
            <a className="site-nav__link" href="#why-it-matters">
              {copy.nav.why}
            </a>
            <a className="site-nav__link" href={xHref} target="_blank" rel="noreferrer">
              {copy.nav.x}
            </a>
          </nav>

          <WaitlistTriggerButton className="button button--secondary site-header__cta" label={copy.waitlist} />
        </div>
      </div>
    </header>
  );
}
