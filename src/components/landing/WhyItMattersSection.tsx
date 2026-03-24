import Image from 'next/image';

export function WhyItMattersSection() {
  return (
    <section className="section" id="why-it-matters">
      <div className="why-matters">
        <div className="why-matters__header">
          <span className="section__label">Why it matters</span>
          <h2 className="why-matters__title">Why it matters</h2>
          <p className="why-matters__intro">
            Not every fan catches the event live.
          </p>
          <p className="why-matters__intro">
            Some miss the match. Some miss the fight. Some still want to support the athlete
            afterward.
          </p>
          <p className="why-matters__intro">
            Fansten makes that possible.
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
              <p>Missing the live moment should not mean missing the chance to support.</p>
            </div>

            <div className="card why-matters__text-card">
              <p>
                Fansten keeps a meaningful support window open even after the final moment has
                passed.
              </p>
              <p>
                It gives fans a simple way to come back, support the athlete, and stay part of the
                moment a little longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
