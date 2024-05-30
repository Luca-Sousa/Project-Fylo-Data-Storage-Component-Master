/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'Color-Pale-Blue': 'hsl(243, 100%, 93%)',
        'Color-Grayish-Blue': 'hsl(229, 7%, 55%)',
        'Color-Dark-Blue': 'hsl(228, 56%, 26%)',
        'Color-Very-Dark-Blue': 'hsl(229, 57%, 11%)',
      },
      fontFamily: {
        Raleway: 'Raleway',
      },
      gradientColorStops: {
        Gradient: 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',
      }
    },
  },
  plugins: [],
}

