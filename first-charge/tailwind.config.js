/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      rajdhani: ['Rajdhani', 'sans-serif'],
      poppins:['Poppins', 'sans-serif'],
      bebasneue: ['Bebas Neue', 'sans-serif'],
  },
  fontSize: {
    '7xl':['7.7125rem']
  },
  colors: {

    'green1': '#58BB47',
  },
  },
  plugins: [],
}

