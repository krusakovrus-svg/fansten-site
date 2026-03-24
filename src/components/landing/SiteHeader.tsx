import Image from 'next/image';

interface SiteHeaderProps {
  waitlistHref: string;
  xHref: string;
}

export function SiteHeader({ waitlistHref, xHref }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <a className="brand" href="#top" aria-label="Fansten home">
            <span className="brand__icon">
              <Image src="/images/fansten-icon.png" alt="" width={40} height={40} />
            </span>
            <span>
              <span className="brand__wordmark">Fan support platform</span>
              <strong className="brand__title">Fansten</strong>
            </span>
          </a>

          <nav className="site-nav" aria-label="Landing sections">
            <a className="site-nav__link" href="#what-is-fansten">
              What is Fansten
            </a>
            <a className="site-nav__link" href="#how-it-works">
              How it works
            </a>
            <a className="site-nav__link" href="#why-it-matters">
              Why it matters
            </a>
            <a className="site-nav__link" href={xHref} target="_blank" rel="noreferrer">
              X
            </a>
          </nav>

          <a className="button button--secondary site-header__cta" href={waitlistHref}>
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
