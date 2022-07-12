/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "trans-card": "rgba(255, 255, 255, 0.5)", //background color and opacity for transparent card
      "black-darkest": "rgb(0 0 0)",
      "black-dark": "rgba(35, 34, 50, 1)",
      "black-gray": "rgba(255, 255, 255, 1)",
      "purple-dark": "rgba(14, 0, 83, 1)",
      "red-light": "rgba(255, 61, 20, 0.7)",
      gray: "#737070",
      blue: "rgba(0, 133, 255, 1)",
      white: "rgb(255 255 255)",
    },
    fontFamily: {
      roboto: ["Roboto", "Georgia", "ui-serif"],
    },
    extend: {
      backgroundImage: {
        //login and register background image
        "background-register": "url('/public/assets/images/background.jpg')",
      },
    },
    screens: {
      // min width media query
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // max width media query
      "max-md": { max: "850px" },
      "max-lg": { max: "1023px" },
      "max-sm": { max: "540px" },
      "max-xs": { max: "440px" },
    },
  },
  plugins: [],
};
