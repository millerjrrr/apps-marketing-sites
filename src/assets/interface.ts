interface ContentStructure {
  header: {
    tab1: string;
    tab2: string;
    tab3?: string;
  };
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
  colors: {
    PRIMARY: `#${string}`;
    SECONDARY: `#${string}`;
    TERTIARY: `#${string}`;
    CONTRAST: `#${string}`;
    CONTRAST_B: `#${string}`;
    CONTRAST_C: `#${string}`;
  };
}

export interface SitesStructure {
  "link-king": ContentStructure;
  griddier: ContentStructure;
}

export type SiteKey = keyof SitesStructure;
