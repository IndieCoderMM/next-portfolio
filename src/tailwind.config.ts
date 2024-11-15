import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        open: ["var(--font-open-sans)"],
      },
      boxShadow: {
        "shadow-blur": "10px 10px 20px 0 rgba(255, 255, 255, 0.5)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#2a2a2a",
        light: "#f0f0f0",
        primary: "#6262f9",
        primaryDark: "#2bc578",
        accent: "#2bc578",
        "primary-800": "#4f46e5",
        "primary-900": "#3e35b1",
      },
      animation: {
        move: "move 5s linear infinite",
        buttonheartbeat: "buttonheartbeat 2s infinite ease-in-out",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        buttonheartbeat: {
          "0%": {
            "box-shadow": '0 0 0 0 theme("colors.primary")',
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow": '0 0 0 7px theme("colors.primary/0")',
            transform: "scale(1.05)",
          },
          "100%": {
            "box-shadow": '0 0 0 0 theme("colors.primary/0")',
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
