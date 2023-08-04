/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mb: "320px",
      xxl: "1024px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
