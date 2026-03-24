import Image from 'next/image';

interface HeroSectionProps {
  waitlistHref: string;
  xHref: string;
}

export function HeroSection({ waitlistHref, xHref }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">During the event. After the event.</p>
        <h1 className="hero__title">Fan support beyond the moment</h1>
        <p className="hero__subtitle">
          Fansten is a platform where fans support athletes during and after sports events.
        </p>

        <div className="hero__actions button-row">
          <a className="button button--primary" href={waitlistHref}>
            Join the waitlist
          </a>
          <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
            Follow on X
          </a>
        </div>

        <div className="hero__meta" aria-label="Product highlights">
          <span>Live support</span>
          <span>Post-event support window</span>
          <span>Brand-first sports-tech experience</span>
        </div>
      </div>

      <div className="hero__visual">
        <Image
          className="hero__image"
          src="/images/fansten-hero.png"
          alt="Fansten hero visual with a stadium atmosphere and fans supporting beyond the live moment."
          fill
          priority
          sizes="(max-width: 980px) 100vw, 52vw"
        />

        <div className="hero__visual-note">
          <div>
            <strong>Built around the post-live moment</strong>
            <p>
              A premium dark landing built from the approved Fansten hero visual and ready to grow into
              the future fansten.com website.
            </p>
          </div>

          <span className="hero__pulse" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
