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
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        hand: ["var(--font-gochi-hand)"],
      },
      boxShadow: {
        blur: "10px 10px 20px 0 rgba(255, 255, 255, 0.5)",
        badge:
          "rgba(99, 99, 99, 0.2) 0 2px 6px 0, inset 0px -6px 0px rgba(0, 0, 0, 0.1), inset 0px -2px 0px rgba(0, 0, 0, 0.15)",
        "badge-dark":
          "rgba(9, 9, 9, 0.2) 0 2px 6px 0, inset 0px -6px 0px rgba(0, 0, 0, 0.3), inset 0px -2px 0px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "gr-primary":
          "linear-gradient(to right, var(--primary-900), var(--primary-800), var(--primary-900))",
        "gr-primary-dark":
          "linear-gradient(to right, #1c8550, #1ba568, #1c8550)",
      },
      colors: {
        dark: "#383838",
        light: "#f0f0f0",
        primary: "#6262f9",
        primaryDark: "#2bc578",
        accent: "#2bc578",
        "primary-800": "#4f46e5",
        "primary-900": "#3e35b1",
      },
      animation: {
        move: "move 5s linear infinite",
        heartbeat: "heartbeat 2s infinite ease-in-out",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        heartbeat: {
          "0%": {
            "box-shadow": '0 0 0 0 theme("colors.primaryDark")',
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow": '0 0 0 7px theme("colors.primaryDark/0")',
            transform: "scale(1.05)",
          },
          "100%": {
            "box-shadow": '0 0 0 0 theme("colors.primaryDark/0")',
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
