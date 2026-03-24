import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { SupportStorySection } from '@/components/landing/SupportStorySection';
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection';

const waitlistHref = 'mailto:hello@fansten.com?subject=Join%20the%20Fansten%20waitlist';
const xHref = 'https://x.com/fansten';

export function LandingPage() {
  return (
    <main className="landing-shell">
      <SiteHeader waitlistHref={waitlistHref} xHref={xHref} />

      <div className="container">
        <HeroSection waitlistHref={waitlistHref} xHref={xHref} />

        <SupportStorySection />

        <HowItWorksSection />

        <WhyItMattersSection />

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
