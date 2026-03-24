import { HeroSection } from '@/components/landing/HeroSection';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { SiteHeader } from '@/components/landing/SiteHeader';

const waitlistHref = 'mailto:hello@fansten.com?subject=Join%20the%20Fansten%20waitlist';
const xHref = 'https://x.com/fansten';

const steps = [
  {
    number: '01',
    title: 'Follow the event',
    body: 'Stay close to the match, fight, or race as it unfolds and keep your attention on the athlete you care about.'
  },
  {
    number: '02',
    title: 'Choose the athlete',
    body: 'Pick the side you want to back in a clean, focused flow built around real fan intent, not clutter.'
  },
  {
    number: '03',
    title: 'Support during or after',
    body: 'Support in the live moment or within the post-event window if you missed the event and still want to show up.'
  }
] as const;

const whyItMatters = [
  {
    title: 'Live moments are easy to miss',
    body: 'Fans are busy, asleep, traveling, or catching the result after the final whistle. Support should not disappear just because the timing was wrong.'
  },
  {
    title: 'Athletes still feel the support',
    body: 'Fansten extends the emotional moment and turns a missed live window into a second chance to back the athlete that mattered.'
  }
] as const;

export function LandingPage() {
  return (
    <main className="landing-shell">
      <SiteHeader waitlistHref={waitlistHref} xHref={xHref} />

      <div className="container">
        <HeroSection waitlistHref={waitlistHref} xHref={xHref} />

        <section className="section" id="what-is-fansten">
          <SectionHeading
            label="What is Fansten"
            title="A cleaner support layer for sports fans"
            body="Fansten helps fans support athletes during and after sports events. The product stays simple: follow the moment, choose the athlete, and support in a way that still matters even if you missed the live window."
          />

          <div className="panel-grid">
            <article className="card">
              <h3>Built for the emotional window around sports</h3>
              <p>
                This is not a betting product, not a dashboard, and not a news portal. Fansten is a
                focused fan-support layer designed around meaningful moments before, during, and shortly
                after the event.
              </p>
            </article>

            <aside className="info-card">
              <h3>Why it feels different</h3>
              <p>
                The experience stays direct, premium, and calm, so the athlete, the event, and the fan
                decision remain at the center.
              </p>
              <div className="info-card__metric">One product logic: event first, athlete second, support third.</div>
            </aside>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <SectionHeading
            label="How it works"
            title="A short support flow, not a complicated funnel"
            body="The first Fansten flow is intentionally lightweight. It keeps the path from event interest to athlete support extremely clear."
          />

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="why-it-matters">
          <SectionHeading
            label="Why it matters"
            title="Support should survive the final whistle"
            body="Not every fan catches the event live. Fansten keeps the support window open long enough for that fan to still reward a win, back a favorite athlete, or take part after the moment has passed."
          />

          <div className="impact-grid">
            <div className="impact-quote">
              <p>
                The event can end.
                <br />
                The support should not vanish with it.
              </p>
            </div>

            <div className="card bullet-list">
              {whyItMatters.map((item) => (
                <div key={item.title} className="bullet">
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="cta-panel" id="waitlist">
            <SectionHeading
              label="Final CTA"
              title="Get early access to Fansten"
              body="Join the waitlist for the first version of the product and follow the brand as the website grows into the full fansten.com experience."
            />

            <div className="button-row">
              <a className="button button--primary" href={waitlistHref}>
                Join the waitlist
              </a>
              <a className="button button--secondary" href={xHref} target="_blank" rel="noreferrer">
                Follow on X
              </a>
            </div>

            <p className="cta-panel__note">
              Current assumption for waitlist capture: <code>hello@fansten.com</code>. This can be swapped
              for a real form endpoint later without changing the page structure.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer__row">
            <span>Fansten landing workspace</span>
            <span>Prepared for future fansten.com rollout</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
