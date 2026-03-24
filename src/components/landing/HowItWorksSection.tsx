import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Follow the event',
    body: 'Stay close to the moments that matter.'
  },
  {
    number: '02',
    title: 'Choose the athlete',
    body: 'Support the person you want to back.'
  },
  {
    number: '03',
    title: 'Support live or after the event',
    body: 'Send support during the moment - or shortly after it ends.'
  }
] as const;

export function HowItWorksSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="workflow">
        <div className="workflow__header">
          <span className="section__label">How Fansten works</span>
          <h2 className="workflow__title">How Fansten works</h2>
          <p className="workflow__intro">
            Fansten makes athlete support simple, direct, and connected to real sports moments.
          </p>
        </div>

        <div className="workflow__layout">
          <div className="workflow__steps" aria-label="Fansten support flow">
            {steps.map((step) => (
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
                alt="Fansten support flow visual showing the bridge between the event, the athlete, and live or after-event support."
                fill
                sizes="(max-width: 980px) 100vw, 48vw"
              />

              <div className="workflow__visual-note">
                <strong>One clear flow</strong>
                <p>
                  Follow the event, choose the athlete, then support in the moment or shortly after.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
