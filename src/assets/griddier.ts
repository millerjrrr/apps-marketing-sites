import type { ContentStructure } from "./interface";

const griddier: ContentStructure = {
  canonicalDomain: "griddier.com",
  appStore: "https://apps.apple.com/us/app/griddier/id6749179562",
  playStore: "https://play.google.com/apps/internaltest/4700753610199726469",
  meta: {
    title: "Griddier",
    description:
      "A mobile app designed to help skilled poker players optimize their preflop play",
  },
  pageNames: ["home", "web-app", "contact"],
  footer: {
    aboutUs:
      "Griddier is a poker training app built to help serious players sharpen their preflop game with speed and confidence.",
    address:
      "Rua Cel. Luis Barroso \n Santo Amaro \n São Paulo \n SP · Brazil · 04750-030",
  },
  home: {
    openingBanner: {
      title: "GRIDDIER",
      subTitle: "preflop trainer",
      tagLine: "Take your preflop game to the next level",
    },
    informationBanner: {
      introductionTitle: "An Optimized Approach",
      introductionText: "Remove inefficient and unnecessary repetition",
      titles: ["PRIORITIZE", "MEMORIZE", "REVISE"],
      descriptions: [
        "While you can study ranges in any order, following our learning path allows you to prioritize the ranges that matter most.",
        "Griddier is designed to make range memorization easy. Surprise yourself by how fast you can memorize these ranges perfectly!",
        "Each time you revise a range perfectly its level increases. Having a range on level 6 for example means the student revised that range perfectly 6 times in a row!",
      ],
    },
    readyToLevelUpBanner: {
      title: "Take Your Preflop Game \nTo The Next Level",
      bullets: [
        "Download Griddier for free, no account needed",
        "Free during launch phase",
        "Build real range memory through fast-paced repetition",
        "Made for both high level grinders and beginners",
      ],
    },
    FAQ: [
      {
        q: "Why did we create Griddier?",
        a: "Having a rough idea of preflop ranges is ok for low level play but I realized that the most efficient way to improve my technical game was to memorize my preflop ranges. Griddier makes perfect range memorization an achievable goal.",
      },
      {
        q: "Where do the ranges come from?",
        a: "Griddier comes pre-loaded with my personal ranges, carefully constructd for 100-1000NL rake structure. Frequencies are always rounded to the nearest 25% to make memorization achievable. Ranges can be edited (coming soon) and students can create their own ranges",
      },
      {
        q: "How does structured spaced repetition work?",
        a: "Structured spaced repetition is a learning method that schedules reviews of information at gradually increasing intervals. The idea is simple: every time you successfully recall something, the system waits a bit longer before showing it again, which strengthens long-term memory while cutting out wasted repetitions.\n\nA big drawback of traditional SSR is that you need to organize all those intervals yourself. Tracking what is due today, what was missed, and what needs to be reviewed next quickly becomes messy.\n\nGriddier removes that friction completely. It automates the repetition schedule behind the scenes so you can focus on studying, not managing a calendar of reviews.",
      },
      {
        q: "How much will Griddier cost after the launch phase?",
        a: "Griddier should be as affordable as it is powerful! We plan to launch at $20 a year!",
      },
      {
        q: "What do the stars mean?",
        a: "The stars represent your mastery level for that range. The higher the level, the better you know it. This is based on structured spaced repetition (see the FAQ above). Ranges you know well appear less often. If you get a range wrong, it is demoted to level 0 and the repetition cycle starts again from the beginning.",
      },
    ],
  },
  contact: {
    email: "jacob@griddier.com",
    description:
      "Hi, I'm Jacob, professional poker player since 2018, amateur software developer and the creator of Griddier.\n\nGriddier is a simple but powerful app that has allowed me and now others to memorize complex preflop grids. Perfectly!",
  },
  termsAndConditions: {
    description:
      "Griddier is a poker training app owned and managed by Jacob Miller. By using the app, you agree to the following terms.",
    bullets: [
      {
        title: "Use of the App",
        description:
          "Griddier is for personal training and educational use. You may not modify, copy, distribute, or commercialize the app or its content.",
      },
      {
        title: "User Data",
        description:
          "All data created in the app is stored locally on your device. No data is collected, transmitted, or stored on any server.",
      },
      {
        title: "Subscriptions",
        description:
          "Some features may require a paid subscription. Payments and renewals are handled by third-party providers. You may cancel your subscription at any time through your app store.",
      },
      {
        title: "Limitations",
        description:
          "The app is provided “as is.” I am not responsible for data loss, service interruptions, or any indirect or consequential damages.",
      },
      {
        title: "Termination",
        description:
          "I may restrict access to the app if these Terms are violated.",
      },
      {
        title: "Changes",
        description:
          "These Terms may be updated occasionally. Continued use of the app means you accept the updated Terms.",
      },
      {
        title: "Contact",
        description: "If you have questions, contact me at jacob@griddier.com",
      },
    ],
  },
  privacyPolicy: {
    description:
      "This Privacy Policy explains how Griddier handles your personal data and ensures your information stays secure.",

    bullets: [
      {
        title: "Data Storage",
        description:
          "All user data is stored locally on your device. No personal or usage data is collected, transmitted, or stored on any server.",
      },
      {
        title: "No Data Transmission",
        description:
          "Your data remains on your device only. The app does not send any information over the internet or share it with third parties.",
      },
      {
        title: "Developer Access",
        description:
          "The developers of Griddier do not have access to any user data, as it never leaves your device.",
      },
      {
        title: "Data Security",
        description:
          "While the app keeps your data secure, we recommend protecting your device with a password or biometric lock for added safety.",
      },
      {
        title: "User Control",
        description:
          "You have full control over your data and can delete or reset it at any time within the app.",
      },
      {
        title: "Contact",
        description:
          "If you have questions or concerns regarding this Privacy Policy, contact me at jacob@giddier.com",
      },
    ],
  },
  colors: {
    PRIMARY: "#34004d",
    SECONDARY: "#640092",
    TERTIARY: "#ae00ff",
    CONTRAST: "#efccff",
    CONTRAST_B: "#EEDFA4",
    CONTRAST_C: "#ffffff",
  },
};

export default griddier;
