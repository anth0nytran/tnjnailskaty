import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F3",
        cream: "#F5F0E6",
        champagne: "#E8DCC4",
        clay: {
          50: "#FBF4EF",
          100: "#F1DDD3",
          500: "#A65F4E",
          700: "#69382F",
        },
        sage: {
          50: "#F1F3EE",
          100: "#DDE3D7",
          500: "#6F7E65",
          700: "#3E4937",
        },
        gold: {
          DEFAULT: "#C9A961",
          50: "#FBF7EC",
          100: "#F4ECD2",
          200: "#E8D9A6",
          300: "#DCC57A",
          400: "#D2B560",
          500: "#C9A961",
          600: "#A88A3F",
          700: "#7E6830",
          800: "#544622",
          900: "#2A2311",
        },
        ink: "#0D0D0D",
        charcoal: "#1A1A1A",
        graphite: "#2A2A2A",
        stone: {
          warm: "#6B6258",
          warmer: "#8A8175",
          quiet: "#A8A09A",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      maxWidth: {
        prose: "68ch",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
