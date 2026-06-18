export type PageName = "home" | "web-app" |"tools"| "contact" | "blog";

export interface Bullet {
  title: string;
  description: string;
}

export interface ContentStructure {
  canonicalDomain: string;
  appStore: string;
  playStore: string;
  meta: {
    title: string;
    description: string;
  };
  pageNames: PageName[];
  footer: {
    aboutUs: string;
    address: string;
  };
  home: {
    openingBanner: {
      title: string;
      subTitle: string;
      tagLine: string;
    };
    videoPromotion?: string;
    informationBanner: {
      introductionTitle: string;
      introductionText: string;
      titles: string[];
      descriptions: string[];
    };
    readyToLevelUpBanner: {
      title: string;
      bullets: string[];
    };
    FAQ: { q: `${string}?`; a: string }[];
  };
  contact: {
    email: string;
    description: string;
  };
  termsAndConditions: {
    description: string;
    bullets: [Bullet, Bullet, Bullet, ...Bullet[]];
  };
  privacyPolicy: {
    description: string;
    bullets: [Bullet, Bullet, Bullet, ...Bullet[]];
  };
  colors: {
    PRIMARY: `#${string}`;
    SECONDARY: `#${string}`;
    TERTIARY: `#${string}`;
    CONTRAST: `#${string}`;
    CONTRAST_B: `#${string}`;
    CONTRAST_C: `#${string}`;
  };
  toolsPage?:{
    title:"Download our free Rng"
  }
}

export interface SitesStructure {
  "link-king": ContentStructure;
  griddier: ContentStructure;
  "banana-cards": ContentStructure;
}

export type SiteKey = keyof SitesStructure;
