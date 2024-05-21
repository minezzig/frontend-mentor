/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", 'sans-serif']
      },
      colors: {
        blue: 'hsl(231, 69%, 60%)',
        red: 'hsl(0, 94%, 66%)',
        grey: 'hsl(229, 8%, 60%)',
        dark: 'hsl(229, 31%, 21%)',
      }
    },
  },
  plugins: [],
}

