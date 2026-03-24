import Image from 'next/image';

import type { LandingCopy } from '@/components/landing/content';

type HowItWorksSectionProps = {
  copy: LandingCopy['workflow'];
};

export function HowItWorksSection({ copy }: HowItWorksSectionProps) {
  return (
    <section className="section" id="how-it-works">
      <div className="workflow">
        <div className="workflow__header">
          <span className="section__label">{copy.label}</span>
          <h2 className="workflow__title">{copy.title}</h2>
          <p className="workflow__intro">{copy.intro}</p>
        </div>

        <div className="workflow__layout">
          <div className="workflow__steps" aria-label={copy.stepsAriaLabel}>
            {copy.steps.map((step) => (
              <article key={step.number} className="workflow-step">
                <div className="workflow-step__marker">
                  <span className="workflow-step__number">{step.number}</span>
                </div>

                <div className="workflow-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="workflow__visual">
            <div className="workflow__visual-frame">
              <Image
                className="workflow__image"
                src="/images/fansten-how-it-works.png"
                alt={copy.imageAlt}
                fill
                sizes="(max-width: 980px) 100vw, 56vw"
              />
              <span className="workflow__visual-mask workflow__visual-mask--left" aria-hidden="true" />
              <span className="workflow__visual-mask workflow__visual-mask--right" aria-hidden="true" />
              <span className="workflow__visual-mask workflow__visual-mask--bottom" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
