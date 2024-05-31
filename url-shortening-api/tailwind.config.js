/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: 'hsl(180, 66%, 49%)',
        primary2: 'hsl(257, 27%, 26%)',
        secondary: 'hsl(0, 87%, 67%)',
        neutral1: 'hsl(0, 0%, 75%)',
        neutral2: 'hsl(257, 7%, 63%)',
        neutral3: 'hsl(255, 11%, 22%)',
        neutral4: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [],
}

