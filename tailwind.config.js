/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header/index.js",
  ],
  theme: {
    fontFamily: {
      'title': ['"Bebas Neue"', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

