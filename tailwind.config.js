/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'hsl(47, 88%, 63%)',
        bgSecondary: 'hsl(0, 0%, 100%)',
        tBase: 'hsl(0, 0%, 7%)',
        secondary: 'hsl(0, 0%, 42%)',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
