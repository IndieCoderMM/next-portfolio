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
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#2a2a2a",
        light: "#f0f0f0",
        primary: "#6C63FF",
        // darker purple
        "primary-800": "#4f46e5",
        "primary-900": "#3e35b1",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      boxShadow: {
        btn: "0 0 0 3px transparent, 0 6px 20px rgba(18, 18, 18, .1) ",
      },
    },
  },
  plugins: [],
};
