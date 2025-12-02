/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ALLIN: "#a56641ff", // Red
        RAISE: "#ea9b6d", // Orange
        CALL: "#b6d7a8", // Green
        PRIOR: "#a6a6a6", // Gray
        FOLD: "#b9e7f0", // Blue
        PRIMARY: "#34004d",
        SECONDARY: "#640092",
        TERTIARY: "#ae00ff",
        CONTRAST: "#efccff",
        RED: "#ffb9a8ff",
        GREEN: "#76cf70",
        TURQ: "#65B9A9",
        BLUE: "#54a2e2ff",
        GOLD: "#f5e6a4",
        DARKRED: "#f87979ff",
        WHITE: "#ffffff",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        pulseScale: "pulseScale 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
