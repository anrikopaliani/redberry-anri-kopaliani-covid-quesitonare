/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        343: '343px',
        1.8: '1.8px',
      },
      colors: {
        black: '#232323',
      },
    },
  },
  plugins: [],
};
