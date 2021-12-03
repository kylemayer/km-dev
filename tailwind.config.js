module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
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
