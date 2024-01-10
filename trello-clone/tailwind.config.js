/** @type {import('tailwindcss').Config} */

const colors= require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        success: colors.green,
        primary: colors.blue,
        warming: colors.red
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

