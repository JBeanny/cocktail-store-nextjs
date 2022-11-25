/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      midBlack: "#181818",
      orange: "#ef9a53",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      lightred: "#FF6464",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
