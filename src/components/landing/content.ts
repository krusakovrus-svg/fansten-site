import type { Metadata } from 'next';

export type LandingLocale = 'en' | 'ru';

type LandingMetadata = {
  title: string;
  description: string;
};

type HeaderCopy = {
  ariaHome: string;
  wordmark: string;
  navAriaLabel: string;
  nav: {
    what: string;
    how: string;
    why: string;
    x: string;
  };
  waitlist: string;
};

type HeroCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  actions: {
    waitlist: string;
    x: string;
    telegram: string;
  };
};

type SupportStoryCopy = {
  label: string;
  title: string;
  paragraphs: string[];
  imageAlt: string;
};

type WorkflowCopy = {
  label: string;
  title: string;
  intro: string;
  stepsAriaLabel: string;
  steps: Array<{
    number: string;
    title: string;
    body: string;
  }>;
  imageAlt: string;
};

type WhyCopy = {
  label: string;
  title: string;
  intro: string[];
  imageAlt: string;
  captionTitle: string;
  captionBody: string;
  quote: string;
  paragraphs: string[];
};

type FinalCtaCopy = {
  label: string;
  title: string;
  body: string;
  actions: {
    waitlist: string;
    x: string;
    telegram: string;
  };
};

type FooterCopy = {
  left: string;
  right: string;
  socialsAriaLabel: string;
  socials: {
    x: string;
    telegram: string;
  };
};

export type LandingCopy = {
  locale: LandingLocale;
  metadata: LandingMetadata;
  header: HeaderCopy;
  hero: HeroCopy;
  supportStory: SupportStoryCopy;
  workflow: WorkflowCopy;
  why: WhyCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
};

export const landingContent: Record<LandingLocale, LandingCopy> = {
  en: {
    locale: 'en',
    metadata: {
      title: 'Fansten',
      description: 'Fansten is a platform where fans support athletes during and after sports events.'
    },
    header: {
      ariaHome: 'Fansten home',
      wordmark: 'Fan support platform',
      navAriaLabel: 'Landing sections',
      nav: {
        what: 'What is Fansten',
        how: 'How it works',
        why: 'Why it matters',
        x: 'X'
      },
      waitlist: 'Join the waitlist'
    },
    hero: {
      eyebrow: 'During the event. After the event.',
      title: 'Fan support beyond the moment',
      subtitle: 'Fansten is a platform where fans support athletes during and after sports events.',
      imageAlt: 'A stadium atmosphere with fans supporting athletes beyond the live moment.',
      actions: {
        waitlist: 'Join the waitlist',
        x: 'Follow on X',
        telegram: 'Join Telegram'
      }
    },
    supportStory: {
      label: 'What is Fansten',
      title: 'A new way to support athletes',
      paragraphs: [
        'Fansten helps fans turn sports emotion into real support.',
        'Fans can back athletes during live events and even after the final moment has passed.',
        "It's a simpler, more meaningful way to connect fan energy with the people they support."
      ],
      imageAlt: 'Fan energy moving toward an athlete as a visual metaphor for support.'
    },
    workflow: {
      label: 'How Fansten works',
      title: 'How Fansten works',
      intro: 'Fansten makes athlete support simple, direct, and connected to real sports moments.',
      stepsAriaLabel: 'Fansten support flow',
      steps: [
        {
          number: '01',
          title: 'Follow the event',
          body: 'Stay close to the moments that matter.'
        },
        {
          number: '02',
          title: 'Choose the athlete',
          body: 'Support the person you want to back.'
        },
        {
          number: '03',
          title: 'Support live or after the event',
          body: 'Send support during the moment - or shortly after it ends.'
        }
      ],
      imageAlt: 'A visual flow from the event to the athlete and into live or after-event support.'
    },
    why: {
      label: 'Why it matters',
      title: 'Why it matters',
      intro: [
        'Not every fan catches the event live.',
        'Some miss the match. Some miss the fight. Some still want to support the athlete afterward.',
        'Fansten makes that possible.'
      ],
      imageAlt: 'A calm post-event stadium atmosphere that suggests support continuing after the final moment.',
      captionTitle: "The final whistle doesn't end the connection.",
      captionBody:
        'For many fans, support arrives a little later. Fansten keeps that window open while the emotion is still real.',
      quote: 'Missing the live moment should not mean missing the chance to support.',
      paragraphs: [
        'Fansten keeps a meaningful support window open even after the final moment has passed.',
        'It gives fans a simple way to come back, support the athlete, and stay part of the moment a little longer.'
      ]
    },
    finalCta: {
      label: 'Stay connected',
      title: 'Be early to Fansten',
      body:
        'Follow the launch and be among the first to see how Fansten is shaping a new way for fans to support athletes.',
      actions: {
        waitlist: 'Join the waitlist',
        x: 'Follow on X',
        telegram: 'Join Telegram'
      }
    },
    footer: {
      left: 'Fansten',
      right: 'Support that lasts beyond the final whistle.',
      socialsAriaLabel: 'Fansten social links',
      socials: {
        x: 'X',
        telegram: 'Telegram'
      }
    }
  },
  ru: {
    locale: 'ru',
    metadata: {
      title: 'Fansten',
      description: 'Fansten - это платформа, где фанаты поддерживают спортсменов во время и после спортивных событий.'
    },
    header: {
      ariaHome: 'Главная Fansten',
      wordmark: 'Платформа поддержки фанатов',
      navAriaLabel: 'Разделы лендинга',
      nav: {
        what: 'Что такое Fansten',
        how: 'Как это работает',
        why: 'Почему это важно',
        x: 'X'
      },
      waitlist: 'Вступить в лист ожидания'
    },
    hero: {
      eyebrow: 'Во время события. После события.',
      title: 'Поддержка фанатов за пределами момента',
      subtitle: 'Fansten - это платформа, где фанаты поддерживают спортсменов во время и после спортивных событий.',
      imageAlt: 'Стадионная атмосфера Fansten, где поддержка продолжается и после главного момента события.',
      actions: {
        waitlist: 'Вступить в лист ожидания',
        x: 'Подписаться в X',
        telegram: 'В Telegram'
      }
    },
    supportStory: {
      label: 'Что такое Fansten',
      title: 'Новый способ поддерживать спортсменов',
      paragraphs: [
        'Fansten помогает превращать спортивные эмоции фанатов в реальную поддержку.',
        'Фанаты могут поддерживать спортсменов во время live-событий и даже после того, как главный момент уже прошел.',
        'Это более простой и осмысленный способ связать энергию болельщиков с теми, кого они поддерживают.'
      ],
      imageAlt: 'Поток энергии от фанатов к спортсмену как визуальный образ поддержки.'
    },
    workflow: {
      label: 'Как работает Fansten',
      title: 'Как работает Fansten',
      intro: 'Fansten делает поддержку спортсменов простой, прямой и связанной с реальными спортивными моментами.',
      stepsAriaLabel: 'Сценарий поддержки в Fansten',
      steps: [
        {
          number: '01',
          title: 'Следите за событием',
          body: 'Будьте рядом с моментами, которые действительно важны.'
        },
        {
          number: '02',
          title: 'Выберите спортсмена',
          body: 'Поддержите того, за кого хотите болеть.'
        },
        {
          number: '03',
          title: 'Поддержите в эфире или после события',
          body: 'Отправьте поддержку в моменте - или вскоре после его окончания.'
        }
      ],
      imageAlt: 'Визуальный сценарий Fansten от события к спортсмену и дальше к поддержке в эфире или после события.'
    },
    why: {
      label: 'Почему это важно',
      title: 'Почему это важно',
      intro: [
        'Не каждый фанат успевает на событие вживую.',
        'Кто-то пропускает матч. Кто-то пропускает бой. Кто-то все равно хочет поддержать спортсмена уже после события.',
        'Fansten делает это возможным.'
      ],
      imageAlt: 'Спокойная пост-событийная атмосфера стадиона, где поддержка может продолжаться и после финального момента.',
      captionTitle: 'Финальный свисток не обрывает связь.',
      captionBody:
        'Для многих фанатов желание поддержать приходит чуть позже. Fansten сохраняет это окно открытым, пока эмоция еще жива.',
      quote: 'Пропущенный момент не должен лишать возможности поддержать спортсмена.',
      paragraphs: [
        'Fansten оставляет осмысленное окно поддержки открытым и после финального свистка.',
        'Так фанаты могут вернуться к событию, поддержать спортсмена и остаться частью этого момента чуть дольше.'
      ]
    },
    finalCta: {
      label: 'Оставайтесь на связи',
      title: 'Будьте среди первых в Fansten',
      body:
        'Следите за запуском и будьте среди первых, кто увидит, как Fansten формирует новый способ для фанатов поддерживать спортсменов.',
      actions: {
        waitlist: 'Вступить в лист ожидания',
        x: 'Подписаться в X',
        telegram: 'В Telegram'
      }
    },
    footer: {
      left: 'Fansten',
      right: 'Поддержка, которая живет дольше финального свистка.',
      socialsAriaLabel: 'Социальные ссылки Fansten',
      socials: {
        x: 'X',
        telegram: 'Telegram'
      }
    }
  }
};

export function getLandingMetadata(locale: LandingLocale): Metadata {
  const copy = landingContent[locale];

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: locale === 'en' ? '/' : '/ru',
      languages: {
        en: '/',
        ru: '/ru'
      }
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US'
    },
    twitter: {
      title: copy.metadata.title,
      description: copy.metadata.description
    }
  };
}
