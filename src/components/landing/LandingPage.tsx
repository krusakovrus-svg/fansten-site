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

const xHref = 'https://x.com/fansten_app';
const telegramHref = 'https://t.me/Fansten_app';

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
        <HeroSection
          waitlistHref={waitlistHref}
          xHref={xHref}
          telegramHref={telegramHref}
          copy={copy.hero}
        />

        <SupportStorySection copy={copy.supportStory} />

        <HowItWorksSection copy={copy.workflow} />

        <WhyItMattersSection copy={copy.why} />

        <FinalCtaSection
          waitlistHref={waitlistHref}
          xHref={xHref}
          telegramHref={telegramHref}
          copy={copy.finalCta}
        />

        <footer className="site-footer">
          <div className="site-footer__row">
            <span>{copy.footer.left}</span>
            <div className="site-footer__cluster">
              <span>{copy.footer.right}</span>
              <nav className="site-footer__socials" aria-label={copy.footer.socialsAriaLabel}>
                <a href={xHref} target="_blank" rel="noreferrer">
                  {copy.footer.socials.x}
                </a>
                <a href={telegramHref} target="_blank" rel="noreferrer">
                  {copy.footer.socials.telegram}
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
