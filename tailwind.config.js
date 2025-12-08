/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        flyInRight: {
          "0%": { opacity: 0, transform: "translateX(60px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        phoneShake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        pulseScale: "pulseScale 2s ease-in-out infinite",
        flyInRight: "flyInRight 0.6s ease-out forwards",
        phoneShake: "phoneShake 0.25s linear infinite",
      },
      boxShadow: {
        white: "0 0 5px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
