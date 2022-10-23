/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: 'blue',
      secondary: 'red',
      'text-base': 'white'
    },
    extend: {
      fontFamily: {
        Lato: ['Lato', 'Helvetica', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        body: ['Nunito']
      }
    }
  },
  plugins: []
}
