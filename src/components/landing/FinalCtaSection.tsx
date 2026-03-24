type FinalCtaSectionProps = {
  waitlistHref: string;
  xHref: string;
};

export function FinalCtaSection({ waitlistHref, xHref }: FinalCtaSectionProps) {
  return (
    <section className="section" id="waitlist">
      <div className="final-cta">
        <div className="final-cta__content">
          <span className="section__label">Final CTA</span>
          <h2 className="final-cta__title">Be early to Fansten</h2>
          <p className="final-cta__body">
            Follow the launch and be among the first to see how Fansten is shaping a new way for
            fans to support athletes.
          </p>

          <div className="button-row final-cta__actions">
            <a className="button button--primary" href={waitlistHref}>
              Join the waitlist
            </a>
            <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
