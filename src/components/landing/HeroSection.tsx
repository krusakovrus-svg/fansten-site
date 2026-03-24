import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';
import { WaitlistTriggerButton } from '@/components/landing/WaitlistModalProvider';

interface HeroSectionProps {
  xHref: string;
  telegramHref: string;
  copy: LandingCopy['hero'];
}

export function HeroSection({ xHref, telegramHref, copy }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="hero__title">{copy.title}</h1>
        <p className="hero__subtitle">{copy.subtitle}</p>

        <div className="hero__actions button-row">
          <WaitlistTriggerButton className="button button--primary" label={copy.actions.waitlist} />
          <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
            {copy.actions.x}
          </a>
        </div>

        <div className="hero__subactions">
          <a href={telegramHref} target="_blank" rel="noreferrer">
            {copy.actions.telegram}
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <Image
          className="hero__image"
          src="/images/fansten-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="(max-width: 980px) 100vw, 58vw"
        />
        <span className="hero__visual-mask hero__visual-mask--headline" aria-hidden="true" />
        <span className="hero__visual-mask hero__visual-mask--body" aria-hidden="true" />
        <span className="hero__visual-accent" aria-hidden="true" />
      </div>
    </section>
  );
}
