/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: [' lato ', 'serif'], // Custom font
      },
      colors:{
        bright:{
          shade:"#F5F5F5"
        },
        green:{
          main:"#72B739"
        },
        blue:{
          main:"#031F83"
        }
      },
    },
  },
  plugins: [],
}

