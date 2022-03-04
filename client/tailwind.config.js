const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Nunito'", ...defaultTheme.fontFamily.serif],
        sans: ["'Source Sans Pro'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
