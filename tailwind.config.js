/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx}', './dist/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary':'#94B49F',
        'secondary': '#CEE5D0',
        'light': '#FCF8E8',
        'accent': '#ECB390'
      }
    },
  },
  plugins: [],
}