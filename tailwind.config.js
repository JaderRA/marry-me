const tokens = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ...tokens,
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        meaCulpa: ["Mea Culpa", "sans-serif"],
        leagueScript: ["League Script", "Mea Culpa"],
      },
    },
  },
  plugins: [],
};
