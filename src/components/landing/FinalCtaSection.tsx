import type { LandingCopy } from '@/components/landing/content';

type FinalCtaSectionProps = {
  waitlistHref: string;
  xHref: string;
  telegramHref: string;
  discordHref: string;
  copy: LandingCopy['finalCta'];
};

export function FinalCtaSection({ waitlistHref, xHref, telegramHref, discordHref, copy }: FinalCtaSectionProps) {
  return (
    <section className="section" id="waitlist">
      <div className="final-cta">
        <div className="final-cta__content">
          <span className="section__label">{copy.label}</span>
          <h2 className="final-cta__title">{copy.title}</h2>
          <p className="final-cta__body">{copy.body}</p>

          <div className="button-row final-cta__actions">
            <a className="button button--primary" href={waitlistHref}>
              {copy.actions.waitlist}
            </a>
            <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
              {copy.actions.x}
            </a>
            <a className="button button--secondary" href={telegramHref} target="_blank" rel="noreferrer">
              {copy.actions.telegram}
            </a>
            <a className="button button--secondary" href={discordHref} target="_blank" rel="noreferrer">
              {copy.actions.discord}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
