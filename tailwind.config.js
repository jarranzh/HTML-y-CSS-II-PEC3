const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      black: colors.black,
      white: colors.white,
      primary: "#d3fbd8",
      primaryTransparent: "d3fbd8a6",
      primaryHover: "#8df59a",
      secondary: "#6c757d"
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    // fontSize: {
    //   h1: "2.5rem"
    // },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
