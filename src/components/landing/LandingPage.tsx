import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { LandingLocaleEffect } from '@/components/landing/LandingLocaleEffect';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { SupportStorySection } from '@/components/landing/SupportStorySection';
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection';
import { landingContent, type LandingLocale } from '@/components/landing/content';

const waitlistHrefByLocale: Record<LandingLocale, string> = {
  en: 'mailto:hello@fansten.com?subject=Join%20the%20Fansten%20waitlist',
  ru: 'mailto:hello@fansten.com?subject=%D0%9B%D0%B8%D1%81%D1%82%20%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20Fansten'
};

const xHref = 'https://x.com/fansten';

type LandingPageProps = {
  locale?: LandingLocale;
};

export function LandingPage({ locale = 'en' }: LandingPageProps) {
  const copy = landingContent[locale];
  const waitlistHref = waitlistHrefByLocale[locale];

  return (
    <main className="landing-shell">
      <LandingLocaleEffect locale={locale} />
      <SiteHeader waitlistHref={waitlistHref} xHref={xHref} copy={copy.header} />

      <div className="container">
        <HeroSection waitlistHref={waitlistHref} xHref={xHref} copy={copy.hero} />

        <SupportStorySection copy={copy.supportStory} />

        <HowItWorksSection copy={copy.workflow} />

        <WhyItMattersSection copy={copy.why} />

        <FinalCtaSection waitlistHref={waitlistHref} xHref={xHref} copy={copy.finalCta} />

        <footer className="site-footer">
          <div className="site-footer__row">
            <span>{copy.footer.left}</span>
            <span>{copy.footer.right}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
