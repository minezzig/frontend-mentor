/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", 'sans-serif']
      },
      colors: {
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        darkBlue: 'hsl(233, 26%, 24%)',
        grey: 'hsl(233, 8%, 62%)',
        lightGrey: 'hsl(0, 0%, 98%)',
        contrastGrey: 'hsl(220, 16%, 96%)'
      }
    },
  },
  plugins: [],
}

