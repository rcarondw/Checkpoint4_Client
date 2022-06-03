module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        homeGray: "#1D1D1D",
        homeDark: "#0F0F0F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
