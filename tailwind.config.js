/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "bellefair" : [ '"Bellefair"' , "cursive" ]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'darkblue': '#354052',
        'darkyellow':'#FBB900',
        'lightyellow':"#FFD60B",
        'darkgrey':'#9C9C9C',
        'firebrick': "#B22222"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],

  variants: {
    margin: ['responsive', 'hover'],
  }
}
