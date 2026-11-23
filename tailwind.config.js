/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "index.html",
    "./src/**/*.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
        commissioner: ['Commissioner', 'sans-serif'],
        'josefin-sans-700': ['"Josefin Sans"', 'sans-serif'],
        manjari: ['Manjari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}