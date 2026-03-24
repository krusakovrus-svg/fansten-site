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
        </div>

        <div className="support-story__visual">
          <div className="support-story__visual-frame">
            <Image
              className="support-story__image"
              src="/images/fansten-support-visual.jpg"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
            />
            <span className="support-story__visual-mask" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
