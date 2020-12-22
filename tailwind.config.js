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
        textColor: "#0043b1",
        secondary: "#6c757d",
        bgSecondary: "#b0b0b0",
        grayForm: "#ced4da",
        grayButton: "#212529"
      },
      borderWidth: {
        "5": "5px"
      },
      screens: {
        xs: "425px",
        "3xl": "1800px"
      },
      fontSize: {
        h1: "2.5rem"
      },
      lineHeight: {
        h1: "1.2",
        "30px": "30px"
      },
      maxWidth: {
        "80": "80%",
        "100px": "100px",
        "150px": "150px"
      },
      width: {
        "1440": "1440px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
