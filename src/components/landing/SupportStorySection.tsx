import Image from 'next/image';

export function SupportStorySection() {
  return (
    <section className="section" id="what-is-fansten">
      <div className="support-story">
        <div className="support-story__copy">
          <span className="section__label">What is Fansten</span>
          <h2 className="support-story__title">A new way to support athletes</h2>

          <div className="support-story__body">
            <p>Fansten helps fans turn sports emotion into real support.</p>
            <p>
              Fans can back athletes during live events and even after the final moment has passed.
            </p>
            <p>
              It&apos;s a simpler, more meaningful way to connect fan energy with the people they
              support.
            </p>
          </div>

          <div className="support-story__highlights" aria-label="Multi-sport product coverage">
            <span>Matches</span>
            <span>Fights</span>
            <span>Races</span>
            <span>Tournaments</span>
          </div>
        </div>

        <div className="support-story__visual">
          <div className="support-story__visual-frame">
            <Image
              className="support-story__image"
              src="/images/fansten-support-visual.jpg"
              alt="Fan energy flowing toward an athlete as a broad visual metaphor for support."
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
            />

            <div className="support-story__visual-note">
              <strong>Sports emotion, made useful</strong>
              <p>
                A broader visual treatment keeps the section product-first, while the energy trail
                hints at support moving from the crowd to the athlete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
