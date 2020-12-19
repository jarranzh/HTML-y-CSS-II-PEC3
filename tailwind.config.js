const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      black: colors.black,
      primary: "#d3fbd8",
      primaryTransparent: "d3fbd8a6",
      primaryHover: "#8df59a",
      secondary: "#b0b0b0"
    },
    screens: {
      xs: "425px"
    },
    fontSize: {
      h1: "2.5rem"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
