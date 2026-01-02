/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        code: {
          keyword: '#9cdcfe',
          function: '#dcdcaa',
          string: '#ce834d',
        },
      },
    },
  },
  plugins: [],
};
