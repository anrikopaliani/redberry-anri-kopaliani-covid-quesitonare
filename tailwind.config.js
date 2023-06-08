/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        343: '21.438rem',
        1.8: '0.113rem',
        513: '32.063rem',
        50: '3.125rem',
        0.8: '0.05rem',
        47: '2.938rem',
      },
      colors: {
        black: '#232323',
        error: '#F15524',
        hint: '#626262',
      },
      borderWidth: {
        0.8: '0.05rem',
      },
    },
  },
  plugins: [],
};
