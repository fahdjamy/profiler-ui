/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    textColor: {
      primary: "#303030",
      secondary: "#ffed4a",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      // sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      Roboto: ["Roboto", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
      body: ["Nunito"],
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
      },
    },
  },
  plugins: [],
};
