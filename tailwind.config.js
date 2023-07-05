/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["VarelaRound"]
      },
      colors: {
        primary: '#46486B',
        secondary: '#FDF6F5',
        tertiary:'#785BBC',
        fourth:'#785BBC',
        font1: '#fff'
      }
    },
  },
  plugins: [],
}

