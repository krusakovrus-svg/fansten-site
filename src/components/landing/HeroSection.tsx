import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';

interface HeroSectionProps {
  waitlistHref: string;
  xHref: string;
  telegramHref: string;
  copy: LandingCopy['hero'];
}

export function HeroSection({ waitlistHref, xHref, telegramHref, copy }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="hero__title">{copy.title}</h1>
        <p className="hero__subtitle">{copy.subtitle}</p>

        <div className="hero__actions button-row">
          <a className="button button--primary" href={waitlistHref}>
            {copy.actions.waitlist}
          </a>
          <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
            {copy.actions.x}
          </a>
          <a className="button button--secondary" href={telegramHref} target="_blank" rel="noreferrer">
            {copy.actions.telegram}
          </a>
        </div>

        <div className="hero__meta" aria-label={copy.metaAriaLabel}>
          {copy.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero__visual">
        <Image
          className="hero__image"
          src="/images/fansten-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="(max-width: 980px) 100vw, 52vw"
        />

        <div className="hero__visual-note">
          <div>
            <strong>{copy.noteTitle}</strong>
            <p>{copy.noteBody}</p>
          </div>

          <span className="hero__pulse" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
