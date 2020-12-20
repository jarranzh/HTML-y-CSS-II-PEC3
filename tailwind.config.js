const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        primary: "#d3fbd8",
        primaryTransparent: "d3fbd8a6",
        primaryHover: "#8df59a",
        secondary: "#6c757d",
        bgSecondary: "#b0b0b0",
        grayForm: "#ced4da",
        grayButton: "#212529"
      },
      screens: {
        xs: "425px"
      },
      fontSize: {
        h1: "2.5rem"
      },
      lineHeight: {
        h1: "1.2"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
