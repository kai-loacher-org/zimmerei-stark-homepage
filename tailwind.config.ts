import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primäre Farben
        primary: {
          DEFAULT: "#2C3E2D",
          50: "#E8EDE8",
          100: "#D1DBD2",
          200: "#A3B7A5",
          300: "#759378",
          400: "#516F53",
          500: "#2C3E2D",
          600: "#243324",
          700: "#1C271C",
          800: "#141C14",
          900: "#0C100C",
        },
        // Sekundäre Farben (Holz)
        secondary: {
          DEFAULT: "#8B7355",
          50: "#F5F2EE",
          100: "#EBE5DD",
          200: "#D7CBBB",
          300: "#C3B199",
          400: "#AF9777",
          500: "#8B7355",
          600: "#6F5C44",
          700: "#534533",
          800: "#372E22",
          900: "#1B1711",
        },
        // Akzentfarben
        accent: {
          DEFAULT: "#D4A373",
          50: "#FCF8F3",
          100: "#F9F1E7",
          200: "#F3E3CF",
          300: "#EDD5B7",
          400: "#E7C79F",
          500: "#D4A373",
          600: "#C4885A",
          700: "#A86D41",
          800: "#7E5231",
          900: "#543720",
        },
        // Helle Akzente
        light: {
          DEFAULT: "#FEFAE0",
          50: "#FFFFFF",
          100: "#FEFEF9",
          200: "#FEFCF2",
          300: "#FEFBEB",
          400: "#FEF9E4",
          500: "#FEFAE0",
          600: "#FDF5C2",
          700: "#FCF0A4",
          800: "#FBEB86",
          900: "#FAE668",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
