const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "banner": "700F0A",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
      screens: {
        sm: "690px",
        md: "1018px",
        lg: "1279px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
