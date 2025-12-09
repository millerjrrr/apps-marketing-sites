import type { ContentStructure } from "./interface";

const bananaCards: ContentStructure = {
  appStore: "https://apps.apple.com/dk/app/banana-cards/id6749454845?l=da",
  playStore:
    "https://play.google.com/store/apps/details?id=com.bananacards.app",

  meta: {
    title: "Banana Cards",
    description:
      "A toddler-friendly learning app designed to help young children build vocabulary through simple, fun flashcards.",
  },

  pageNames: ["home", "web-app", "contact"],

  footer: {
    aboutUs:
      "Banana Cards is a simple and engaging flashcard app designed for toddlers and young children. With bright visuals, clear audio, and zero distractions, it's the perfect way to introduce early vocabulary in a fun and interactive way.",
    address:
      "Rua Cel. Luis Barroso \n Santo Amaro \n São Paulo \n SP · Brazil · 04750-030",
  },

  home: {
    openingBanner: {
      title: "BANANA CARDS",
      subTitle: "fun flashcards for kids",
      tagLine:
        "A simple and delightful flashcard app designed to help toddlers learn their first words",
    },

    informationBanner: {
      introductionTitle: "Made Simple. Made Fun.",
      introductionText:
        "No ads, no distractions, no complicated menus — just clean, kid-friendly learning.",
      titles: ["BRIGHT VISUALS", "SIMPLE FLASHCARDS", "CLEAR AUDIO"],
      descriptions: [
        "Designed with toddlers in mind: bold colors, friendly illustrations, and easy navigation.",
        "Tap to see a new card, swipe to explore categories — everything is intuitive and frustration-free.",
        "Each card plays a crisp pronunciation to help kids learn naturally and confidently.",
      ],
    },

    readyToLevelUpBanner: {
      title: "Give Your Child\nA Head Start",
      bullets: [
        "Download Banana Cards for free",
        "Perfect for ages 1 to 5",
        "Simple categories to explore: animals, food, objects and more",
        "Safe and distraction-free learning environment",
      ],
    },

    FAQ: [
      {
        q: "What is Banana Cards?",
        a: "Banana Cards is a flashcard app created to help young children learn their first words through simple visuals and audio. It's designed specifically for toddlers, with no ads or distractions.",
      },
      {
        q: "Who is the app for?",
        a: "Banana Cards is ideal for children aged 1 to 5. It's especially helpful for early vocabulary development, bilingual families, and parents who want a simple learning tool.",
      },
      {
        q: "Does the app have ads?",
        a: "No. Banana Cards is 100 percent ad-free and distraction-free. Kids can safely explore without interruptions.",
      },
      {
        q: "How many categories are included?",
        a: "The app includes multiple popular toddler-friendly categories like animals, food, objects, nature, and daily items. More categories will be added in future updates.",
      },
      {
        q: "Can my child use it without reading?",
        a: "Yes! Banana Cards is designed for toddlers. Large images, simple gestures, and automatic audio make it easy to use without needing to read.",
      },
    ],
  },

  contact: {
    email: "jacob@banana-cards.com",
    description:
      "Hi, I'm Jacob — dad, software developer and creator of Banana Cards. I built this app for kids like my daughter who love learning through simple visuals and sounds. If you have suggestions or feedback, feel free to reach out!",
  },

  termsAndConditions: {
    description:
      "Banana Cards is a children's learning app owned and managed by Jacob Miller. By using the App, you agree to the following terms.",
    bullets: [
      {
        title: "Use of the App",
        description:
          "Banana Cards is intended for young children and families. You may not copy, modify, or commercially distribute the app or its content.",
      },
      {
        title: "User Data",
        description:
          "Banana Cards does not collect personal data. All interactions stay on your device and are not transmitted or stored remotely.",
      },
      {
        title: "Subscriptions",
        description:
          "Some features may be offered as paid upgrades. All payments are handled by your device’s app store.",
      },
      {
        title: "Limitations",
        description:
          "The app is offered 'as is.' While designed for safe use, I am not responsible for data loss or any indirect damages.",
      },
      {
        title: "Changes",
        description:
          "These Terms may be updated periodically. Continued use means you accept the updated Terms.",
      },
      {
        title: "Contact",
        description:
          "For questions about these Terms, contact me at jacob@banana-cards.com",
      },
    ],
  },

  privacyPolicy: {
    description:
      "This Privacy Policy explains how Banana Cards handles your personal data and ensures user safety.",

    bullets: [
      {
        title: "No Data Collection",
        description:
          "Banana Cards does not collect, store, or transmit any personal or usage data.",
      },
      {
        title: "No Third-Party Access",
        description:
          "Your device’s interactions stay local. No data is shared externally.",
      },
      {
        title: "Children’s Privacy",
        description:
          "Banana Cards is designed for children and complies with child-safe app norms by avoiding ads, tracking, or external data collection.",
      },
      {
        title: "Security",
        description:
          "All operations occur locally on your device. For additional safety, ensure your device is protected with a lock or PIN.",
      },
      {
        title: "Contact",
        description:
          "If you have concerns about privacy, contact me at jacob@banana-cards.com",
      },
    ],
  },

  colors: {
    PRIMARY: "#ffffffff",
    SECONDARY: "#fff8d0ff",
    TERTIARY: "#ffeea8ff",
    CONTRAST: "#3A2C00",
    CONTRAST_B: "#513E00",
    CONTRAST_C: "#000000",
  },
};

export default bananaCards;
