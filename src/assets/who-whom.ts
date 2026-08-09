import type { SimpleSiteContentStructure } from "./interface";

const whoWhom: SimpleSiteContentStructure = {
  appMarketingSite: false,
  canonicalDomain: "who-whom.com",
  meta: {
    title: "Who-Whom",
    description:
      "A site to help English speakers learn who's who and who's whom!",
  },
  pageNames: ["home", "test", "contact"],
  footer: {
    aboutUs:
      "Who-whom is a simple and engaging site designed to help English speakers learn the difference between 'who' and 'whom'. With clear explanations, examples, and interactive exercises, it's the perfect way to master this common grammar challenge.",
    address:
      "Rua Cel. Luis Barroso \n Santo Amaro \n São Paulo \n SP · Brazil · 04750-030",
  },
  home: {
    openingBanner: {
      title: "WHO-WHOM",
      subTitle: "learn who's who and who's whom",
      tagLine: "Do you speak English? Well?",
    },
    FAQ: [
      {
        q: "What is the difference between who and whom?",

        a: "Who is used as the subject of a sentence. Whom is used as the object of a verb or preposition.",
      },

      {
        q: "Do people still use whom?",

        a: "Of course. Not by poorly spoken illiterates, but decent people speak decently.",
      },

      {
        q: "Is it okay to use who instead of whom?",

        a: "If you have a very low IQ, or if English isn't your first language, it's a bit less embarrassing.",
      },

      {
        q: "Who is this website for?",

        a: "Inept monolinguals. This is your first language. The least you could do is learn to speak it with a modicum of competence.",
      },

      {
        q: "How does the quiz work?",

        a: "Ten questions. Take your time. Get one wrong and you're out. You can try again in an hour.",
      },

      {
        q: "How long does it take to learn?",

        a: "How long have you been speaking English? A lifetime? A few minutes. Depends who you are.",
      },
    ],
  },
  contact: {
    email: "jacob@link-king.com",
    description:
      "Hi, I'm Jacob, amateur software developer and insufferable grammar snob. Not really. I'm terrible at spelling, grammar, and pretty much anything involving words. I put the k in dyslexic and somehow managed to build this site with the help of KI. If you spot a mistake, have a suggestion, or just want to say hello, feel free to reach out. As I am sure you may have guessed, I have no friends.",
  },
  termsAndConditions: {
    description:
      "Who Whom is a free educational website created by Jacob Miller. By using this website, you agree to the following terms.",

    bullets: [
      {
        title: "Using the Website",
        description:
          "You're welcome to use this website for personal, non-commercial purposes. Please don't misuse it or attempt to interfere with its operation.",
      },
      {
        title: "Intellectual Property",
        description:
          "Unless otherwise stated, all content on this website belongs to Jacob Miller. You may not copy or republish substantial portions without permission.",
      },
      {
        title: "Quiz Attempts",
        description:
          "To keep the leaderboard fair, the website limits users to one quiz attempt per hour using a browser cookie. Clearing your cookies may reset this timer.",
      },
      {
        title: "No Guarantees",
        description:
          "The website is provided 'as is'. While every effort is made to ensure the content is accurate, no guarantees are made regarding correctness or availability.",
      },
      {
        title: "Changes",
        description:
          "These Terms may be updated from time to time. Continued use of the website means you accept any changes.",
      },
      {
        title: "Contact",
        description: "Questions? Email me at jacob@whowhom.com.",
      },
    ],
  },

  privacyPolicy: {
    description:
      "This Privacy Policy explains what information this website collects and how it is used.",

    bullets: [
      {
        title: "What Data Is Collected?",
        description:
          "This website does not require an account and does not collect personal information as part of normal use.",
      },
      {
        title: "Cookies",
        description:
          "A single browser cookie is used to remember when you last completed the quiz so that attempts can be limited to once per hour. No advertising or tracking cookies are used.",
      },
      {
        title: "Contacting Me",
        description:
          "If you choose to contact me by email, I'll only use the information you provide to reply to your message.",
      },
      {
        title: "Data Security",
        description:
          "Reasonable measures are taken to keep the website secure, but no website can guarantee complete security.",
      },
      {
        title: "Changes",
        description:
          "This Privacy Policy may be updated occasionally. Any changes will be posted on this page.",
      },
      {
        title: "Contact",
        description:
          "If you have any questions about this Privacy Policy, email jacob@whowhom.com.",
      },
    ],
  },

  colors: {
    PRIMARY: "#0B173A", // Deep navy background
    SECONDARY: "#16285A", // Slightly lighter navy
    TERTIARY: "#4E76C9", // Soft blue accent
    CONTRAST: "#F7F4EB", // Warm ivory
    CONTRAST_B: "#C8DCF8", // Powder blue
    CONTRAST_C: "#FFFFFF", // Pure white
  },
};

export default whoWhom;
