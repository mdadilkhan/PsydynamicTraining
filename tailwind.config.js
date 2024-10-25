/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#614298',
        secondary: '#ffd52d',
        tertiary:'#252641',
        background1: '#f4edff',
        background2: '#fcfaff',
        white: '#ffffff',
        border: '#9c81cc',
        price: '#565857',
        disable:'#C4C4C4',
        disable1:'#818C96'
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
