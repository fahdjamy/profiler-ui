/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        body: ['Nunito']
      },
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
      },
    }
  },
  plugins: []
}
