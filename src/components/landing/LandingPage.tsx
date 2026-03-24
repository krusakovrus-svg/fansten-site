import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { LandingLocaleEffect } from '@/components/landing/LandingLocaleEffect';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { SupportStorySection } from '@/components/landing/SupportStorySection';
import { WaitlistModalProvider } from '@/components/landing/WaitlistModalProvider';
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection';
import { landingContent, type LandingLocale } from '@/components/landing/content';

const xHref = 'https://x.com/fansten_app';
const telegramHref = 'https://t.me/Fansten_app';

type LandingPageProps = {
  locale?: LandingLocale;
};

export function LandingPage({ locale = 'en' }: LandingPageProps) {
  const copy = landingContent[locale];
  const sourcePage = locale === 'ru' ? '/ru' : '/';

  return (
    <WaitlistModalProvider locale={locale} sourcePage={sourcePage}>
      <main className="landing-shell">
        <LandingLocaleEffect locale={locale} />
        <SiteHeader xHref={xHref} copy={copy.header} />

        <div className="container">
          <HeroSection xHref={xHref} telegramHref={telegramHref} copy={copy.hero} />

          <SupportStorySection copy={copy.supportStory} />

          <HowItWorksSection copy={copy.workflow} />

          <WhyItMattersSection copy={copy.why} />

          <FinalCtaSection xHref={xHref} telegramHref={telegramHref} copy={copy.finalCta} />

          <footer className="site-footer">
            <div className="site-footer__row">
              <div className="site-footer__brand">
                <strong>{copy.footer.left}</strong>
                <span>{copy.footer.right}</span>
              </div>

              <nav className="site-footer__socials" aria-label={copy.footer.socialsAriaLabel}>
                <a href={xHref} target="_blank" rel="noreferrer">
                  {copy.footer.socials.x}
                </a>
                <a href={telegramHref} target="_blank" rel="noreferrer">
                  {copy.footer.socials.telegram}
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </main>
    </WaitlistModalProvider>
  );
}
