import type { SitesStructure } from "./interface";

const sites: SitesStructure = {
  "link-king": {
    header: {
      tab1: "HOME",
      tab2: "ABOUT",
      tab3: "WEB APP",
    },
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
  },
  griddier: {
    header: {
      tab1: "HOME",
      tab2: "ABOUT",
      tab3: "WEB APP",
    },
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
  },
};

export default sites;
