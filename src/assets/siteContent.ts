import type { SitesStructure } from "./interface";

const sites: SitesStructure = {
  "link-king": {
    meta: {
      title: "Link-King",
      description:
        "A language learning app designed to help advanced language learners expand their vocabulary",
    },
    pageNames: ["home", "web-app", "contact"],
    footer: {
      aboutUs:
        "Link-King is a language learning app, designed to help advanced learners rapidly improve their vocabulary in a new language. By building lasting connections between words in your native language and their equivalents in your target language, this approach offers a smarter and more efficient way to expand your vocabulary.",
      address:
        "Rua Cel. Luis Barroso \n Santo Amaro \n São Paulo \n SP · Brazil · 04750-030",
    },
    home: {
      openingBanner: {
        title: "LINK-KING",
        subTitle: "words that matter",
        tagLine:
          "A mobile app designed to help advanced students expand their vocabulary",
      },
      informationBanner: {
        introductionTitle: "Our Optimized Approach",
        introductionText:
          "By removing inefficient and unnecessary repetition we focus on what really matters",
        titles: [
          "DISCOVER YOUR LEVEL",
          "BUILD YOUR VOCABULARY",
          "IMMERSE IN MEDIA",
        ],
        descriptions: [
          "Know Where You Stand – Our intelligent rating system quickly identifies your current language ability, so you start learning at the perfect level.",
          "Learn the Right Words, Right Now – Using your rating, we guide you to master the most useful words tailored to your language journey.",
          "Connect with the Language – With your expanded vocabulary, dive into native media and experience the language the way it’s meant to be heard and read.",
        ],
      },
      readyToLevelUpBanner: {
        title: "Take Your Vocabulary\nTo The Next Level",
        bullets: [
          "Download Link-King for FREE and sign up in seconds",
          "Take our FREE 3 minute test to find your vocabulary rating",
          "Enjoy our free trial and see if LinkKing is for you",
          "Join us for lasting, consistent and measurable progress",
        ],
      },
      FAQ: [
        {
          q: "Why did we create Link-King?",
          a: "LinkKing was inspired by my own language learning journey. After completing the Portuguese course on Duolingo, I was still far from fluent. I wasn’t able to read books or follow multiway conversations. I realized what was really holding me back was my limited vocabulary. I worked with a basic version of this application in a spreadsheet for about a year and made huge progress. It was so effective that I felt I had to share this method with the world.",
        },
        {
          q: "Why do we only focus on vocabulary?",
          a: "We believe that expanding a student’s vocabulary is the most important, most efficient, and, unfortunately, most neglected aspect of language learning.\n\nIf a student understood every word in a language, they could read a book. It might take time but by the end of that process, they would have gained a much deeper understanding of the grammar and structure of the language. On the other hand, if a student had excellent grammar but a very limited vocabulary (as is often the case), the same book would still be inaccessible.\n\nFocusing on vocabulary is also highly efficient. Most of the words in any given sentence are extremely common (e.g., “he,” “she,” “it,” “the”), so we avoid unnecessary repetition. With modern technologies, we can easily identify and exclude material the student already knows, enabling them to focus on learning new words quickly and effectively.\n\nDespite its importance, rapid vocabulary expansion is often overlooked. Excellent resources exist for beginner learners, focusing on grammar and foundational skills, but there are few tools designed specifically for intermediate or advanced learners to accelerate vocabulary growth.",
        },
        {
          q: "Why are users only tested in the target language?",
          a: "Understanding a large number of words is far more important than being able to use a lot of words. When speaking, you can often find different ways to say the same thing and still get your point across. However, the greatest challenge as a language learner is in multiway conversations where you can’t interrupt and ask for clarification—you need to understand the exact words being used.\nFortunately, even if we only study by testing ourselves with words presented in the target language, we naturally remember those words in the reverse direction as well, albeit with slightly less proficiency.",
        },
        {
          q: "What is the performance rating and how is it calculated?",
          a: "The performance rating is based on the Elo rating system, famously used in chess. Your rating increases when you correctly learn new words and decreases when you get them wrong. The tougher the word, the more your rating increases—or the less it decreases. The Elo system not only fosters a sense of competition but also ensures that you’re matched with words appropriate for your level. Check out our blog post to learn more!",
        },
        {
          q: "What are the supported languages?",
          a: "You can currently study 6 languages: English, Spanish, French, German, Italian, Portuguese FROM over 40 home languages:Arabic (ar), Bangla (bn), Bosnian (bs), Bulgarian (bg), Catalan (ca), Chinese Simplified (zh-Hans), Chinese Traditional (zh-Hant), Croatian (hr), Czech (cs), Danish (da), Dutch (nl), English (en), Finnish (fi), French (fr), German (de), Greek (el), Haitian Creole (ht), Hebrew (he), Hindi (hi), Hmong Daw (mww), Hungarian (hu), Icelandic (is), Indonesian (id), Italian (it), Japanese (ja), Korean (ko), Latvian (lv), Lithuanian (lt), Malay (ms), Maltese (mt), Norwegian Bokmål (nb), Polish (pl), Portuguese (Brazil) (pt), Romanian (ro), Russian (ru), Serbian (Latin) (sr-Latn), Slovak (sk), Slovenian (sl), Spanish (es), Swahili (sw), Swedish (sv), Tamil (ta), Thai (th), Turkish (tr), Ukrainian (uk), Urdu (ur), Vietnamese (vi), Welsh (cy)",
        },
        {
          q: "What is a lemma?",
          a: "A lemma is the base form or dictionary form of a word. It’s the version of the word you would typically look up in a dictionary. For example, in English, the word “run” is the lemma for other forms like “running,” “ran,” and “runs.” At Link-King, we focus on lemmas because they are the key to understanding the broader family of words you’ll encounter. Once you learn a lemma, you can easily recognize its variations in context, making it easier to read, write, and communicate in your target language.",
        },
      ],
    },
    contact: {
      email: "jacob@link-king.com",
      description:
        "Hi, I'm Jacob, professional poker player since 2018, amateur software developer and the creator of Griddier.\n\nGriddier is a simple but powerful app that has allowed me and now others to memorize complex preflop grids. Perfectly!",
    },
    termsAndConditions: {
      description:
        "Link-King is a language learning app owned and managed by Jacob Miller. By using the app or website, you agree to the following terms.",
      bullets: [
        {
          title: "Ownership and Eligibility",
          description:
            "The App and Website are personally owned and managed by Jacob Miller. You must be at least 16 years old to use the App. By creating an account, you confirm that all information provided is accurate and up-to-date.",
        },
        {
          title: "License to Use the App",
          description:
            "You receive a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes. You must not copy, modify, distribute, sell, or reverse-engineer any part of the App.",
        },
        {
          title: "User Accounts",
          description:
            "You are responsible for keeping your account credentials secure. If you suspect unauthorized access, contact me at info@linkoking.com. Accounts may be suspended or terminated for violating these Terms or engaging in fraudulent or abusive activity.",
        },
        {
          title: "Subscriptions and Payments",
          description:
            "Some features require a paid subscription. Payments and renewals are handled by third-party providers, and I do not store any payment information. Subscriptions renew automatically unless canceled through your app store.",
        },
        {
          title: "Content and Intellectual Property",
          description:
            "All content, features, and design elements in the App and Website are owned by me or my licensors. You retain ownership of content you create within the App but grant me a license to use it for purposes related to App functionality.",
        },
        {
          title: "Prohibited Conduct",
          description:
            "You may not use the App or Website for unlawful activity, introduce harmful software, attempt to access another user's account, or exploit the App commercially without written permission.",
        },
        {
          title: "Limitation of Liability",
          description:
            "The App and Website are provided “as is.” I do not guarantee uninterrupted or error-free operation and am not liable for indirect, incidental, or consequential damages, including data loss.",
        },
        {
          title: "Changes to the App or Terms",
          description:
            "The App, Website, and these Terms may be updated occasionally. Continued use indicates acceptance of the updated Terms. Material changes may be communicated through the App or website.",
        },
        {
          title: "Governing Law",
          description:
            "These Terms are governed by the laws of Ireland. Any disputes will be handled in the courts of Ireland.",
        },
        {
          title: "Contact Information",
          description:
            "For questions about these Terms or the App, contact me at jacob@link-king.com",
        },
      ],
    },

    privacyPolicy: {
      description:
        "This Privacy Policy explains how Link-King collects, uses, and protects your personal data across the Website and App, in compliance with GDPR and other applicable laws.",

      bullets: [
        {
          title: "Data Controller Information",
          description:
            "Your data is managed by Jacob Miller, owner of the Link-King App and Website. Contact details: Cuilmore, Swinford, Co. Mayo, Ireland. Email: info@link-king.com.",
        },
        {
          title: "Personal Data Collected",
          description:
            "I collect information you provide (such as your name and email), usage metrics in the App (for learning progress), device information, IP address, and interactions with the Website or App. No sensitive data categories are intentionally collected.",
        },
        {
          title: "Purpose and Legal Basis for Processing",
          description:
            "Your data is processed to provide and improve the App and Website, manage subscriptions and payments, analyze usage, send marketing communications when you consent, and comply with legal obligations. These purposes rely on performance of a contract, legitimate interest, consent, or legal obligation under GDPR.",
        },
        {
          title: "How Your Data Is Used",
          description:
            "Your data is used to deliver App features, personalize your learning experience, process subscriptions, send updates or marketing (if consented), improve the App and Website, and meet legal or regulatory requirements.",
        },
        {
          title: "Data Sharing",
          description:
            "I only share your data with trusted service providers (such as hosting or payment platforms), legal authorities when required, or in the event of a business transfer. No data is sold or shared for advertising purposes.",
        },
        {
          title: "Your Control Over Your Data",
          description:
            "You may review, update, or delete your account and associated data at any time. Deletion requests can be made via email at info@link-king.com or through the in-app account deletion feature. Once deleted, your data is permanently removed.",
        },
        {
          title: "Data Storage and Retention",
          description:
            "Personal data is protected using encryption and other safeguards. Account information is retained until deletion, while payment-related records may be kept for up to seven years for tax and audit compliance. Data is removed when no longer needed.",
        },
        {
          title: "Data Security",
          description:
            "Security measures include encrypted transmission (HTTPS), controlled server access, and periodic reviews of technical safeguards to protect your information.",
        },
        {
          title: "Your Rights Under GDPR",
          description:
            "You may request access to your data, correct inaccuracies, request deletion, restrict processing, obtain a copy of your data in portable format, object to certain processing activities, or withdraw consent at any time by contacting info@link-king.com.",
        },
        {
          title: "Cookies and Tracking Technologies",
          description:
            "The Website and App use cookies to improve performance and analyze usage patterns. More details are provided in the Cookie Policy.",
        },
        {
          title: "Children’s Privacy",
          description:
            "Link-King is not intended for users under 16 years old, and I do not knowingly collect personal data from children.",
        },
        {
          title: "International Data Transfers",
          description:
            "If your data is transferred outside the EEA, it is protected through GDPR-approved safeguards such as standard contractual clauses.",
        },
        {
          title: "Updates to This Policy",
          description:
            "This Privacy Policy may be updated to reflect changes in legal requirements or app functionality. Significant updates will be communicated through the Website or by email.",
        },
        {
          title: "Contact Information",
          description:
            "For questions or concerns about this Privacy Policy please contact me at jacob@link-king.com",
        },
      ],
    },

    colors: {
      PRIMARY: "#000000",
      SECONDARY: "#1b1b1b",
      TERTIARY: "#474747ff",
      CONTRAST: "#EEDFA4",
      CONTRAST_B: "#EEDFA4",
      CONTRAST_C: "#ffffff",
    },
  },

  griddier: {
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
          description:
            "If you have questions, contact me at jacob@griddier.com",
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
  },
};

export default sites;
