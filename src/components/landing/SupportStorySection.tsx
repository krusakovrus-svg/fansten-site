import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';

type SupportStorySectionProps = {
  copy: LandingCopy['supportStory'];
};

export function SupportStorySection({ copy }: SupportStorySectionProps) {
  return (
    <section className="section" id="what-is-fansten">
      <div className="support-story">
        <div className="support-story__copy">
          <span className="section__label">{copy.label}</span>
          <h2 className="support-story__title">{copy.title}</h2>

          <div className="support-story__body">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="support-story__highlights" aria-label={copy.highlightsAriaLabel}>
            {copy.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="support-story__visual">
          <div className="support-story__visual-frame">
            <Image
              className="support-story__image"
              src="/images/fansten-support-visual.jpg"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
            />

            <div className="support-story__visual-note">
              <strong>{copy.noteTitle}</strong>
              <p>{copy.noteBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
