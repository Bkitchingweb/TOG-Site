/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
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
      extend: {
        screens: {
          'max-sm': {'max': '639px'},
          'max-md': {'max': '767px'},
        }
      },
      fontFamily: {
        heading: ["Nikkyou Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
