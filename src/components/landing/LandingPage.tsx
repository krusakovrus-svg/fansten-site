import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
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

        <FinalCtaSection waitlistHref={waitlistHref} xHref={xHref} />

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
