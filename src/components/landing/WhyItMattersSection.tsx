import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';

type WhyItMattersSectionProps = {
  copy: LandingCopy['why'];
};

export function WhyItMattersSection({ copy }: WhyItMattersSectionProps) {
  return (
    <section className="section" id="why-it-matters">
      <div className="why-matters">
        <div className="why-matters__header">
          <span className="section__label">{copy.label}</span>
          <h2 className="why-matters__title">{copy.title}</h2>
          {copy.intro.map((paragraph) => (
            <p key={paragraph} className="why-matters__intro">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="why-matters__layout">
          <div className="why-matters__visual">
            <div className="why-matters__visual-stack">
              <div className="why-matters__visual-frame">
                <Image
                  className="why-matters__image"
                  src="/images/fansten-why-it-matters.jpg"
                  alt={copy.imageAlt}
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                />

                <div className="why-matters__visual-mask why-matters__visual-mask--headline" aria-hidden="true" />
                <div className="why-matters__visual-mask why-matters__visual-mask--brand" aria-hidden="true" />
                <div className="why-matters__visual-orbit" aria-hidden="true" />
              </div>

              <div className="why-matters__visual-caption">
                <strong>{copy.captionTitle}</strong>
                <p>{copy.captionBody}</p>
              </div>
            </div>
          </div>

          <div className="why-matters__content">
            <div className="why-matters__quote">
              <p>{copy.quote}</p>
            </div>

            <div className="why-matters__text-card">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
