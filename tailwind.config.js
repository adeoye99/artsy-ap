/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "bellefair" : [ '"Bellefair"' , "cursive" ]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],

  variants: {
    margin: ['responsive', 'hover'],
  }
}
