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
      white: "#dfe3e8",
      black: "#141414",
    },
    fontFamily: {
      sans: ["Manrope", "Segoe UI", "Helvetica Neue", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Nikkyou Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
