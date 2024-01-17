/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "var(--dark-grey)",
        "very-dark-grey": "var(--very-dark-grey)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefinaSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
