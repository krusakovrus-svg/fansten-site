import Image from 'next/image';

const reasons = [
  {
    title: 'Not every fan catches the event live',
    body: 'Fans are busy, asleep, traveling, or catching the result after the final whistle.'
  },
  {
    title: 'Missing the live moment should not end the support',
    body: 'The emotional connection can still be real, even when the support comes after the event ends.'
  },
  {
    title: 'Fansten keeps that door open',
    body: 'It gives fans a way to support athletes once the arena quiets down, while the meaning of the moment still remains.'
  }
] as const;

export function WhyItMattersSection() {
  return (
    <section className="section" id="why-it-matters">
      <div className="why-matters">
        <div className="why-matters__header">
          <span className="section__label">Why it matters</span>
          <h2 className="why-matters__title">Support should survive the final whistle</h2>
          <p className="why-matters__intro">
            Not every fan catches the event live. Missing the live moment should not mean losing the
            chance to support.
          </p>
        </div>

        <div className="why-matters__layout">
          <div className="why-matters__visual">
            <div className="why-matters__visual-stack">
              <div className="why-matters__visual-frame">
                <Image
                  className="why-matters__image"
                  src="/images/fansten-why-it-matters.jpg"
                  alt="A quiet post-event stadium atmosphere that suggests support continuing after the final moment."
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                />

                <div className="why-matters__visual-mask why-matters__visual-mask--headline" aria-hidden="true" />
                <div className="why-matters__visual-mask why-matters__visual-mask--brand" aria-hidden="true" />
                <div className="why-matters__visual-orbit" aria-hidden="true" />
              </div>

              <div className="why-matters__visual-caption">
                <strong>After the event, the connection can still stay alive.</strong>
                <p>
                  The visual keeps the post-event atmosphere calm and human, so the section reads as
                  quiet continuation rather than peak live action.
                </p>
              </div>
            </div>
          </div>

          <div className="why-matters__content">
            <div className="why-matters__quote">
              <p>
                The event can end.
                <br />
                The support should not vanish with it.
              </p>
            </div>

            <div className="card bullet-list">
              {reasons.map((item) => (
                <div key={item.title} className="bullet">
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
