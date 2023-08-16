/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", "sans-serif"],
      },
      colors: {
        dark: "#2a2a2a",
        light: "#f5f5f5",
        primary: "#6C63FF",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      boxShadow: {
        200: "2px 2px 0px 0px rgba(0,0,0)",
        400: "4px 4px 0px 0px rgba(0,0,0)",
        600: "6px 6px 0px 0px rgba(0,0,0)",
      },
    },
  },
  plugins: [],
};
