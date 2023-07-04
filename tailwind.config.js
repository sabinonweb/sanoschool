/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["VarelaRound"]
      },
      colors: {
        primary: '#46486B',
        secondary: '#FDF6F5',
        font1: '#fff'
      }
    },
  },
  plugins: [],
}

