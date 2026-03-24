import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { SupportStorySection } from '@/components/landing/SupportStorySection';

const waitlistHref = 'mailto:hello@fansten.com?subject=Join%20the%20Fansten%20waitlist';
const xHref = 'https://x.com/fansten';

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

        <SupportStorySection />

        <HowItWorksSection />

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
