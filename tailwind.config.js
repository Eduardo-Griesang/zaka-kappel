/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header/index.js",
    "./src/components/AboutTheBand/index.js",
    "./src/components/Member/index.js",
  ],
  theme: {
    fontFamily: {
      'title': ['"Bebas Neue"', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif']
    },
    fontSize: {
      'sm': '0.95rem',
      'md': '1rem',
      'xl': '1.5rem',
      '8.5xl': '7rem',
      '10xl': '10rem'
    },
    extend: {},
  },
  plugins: [],
}

