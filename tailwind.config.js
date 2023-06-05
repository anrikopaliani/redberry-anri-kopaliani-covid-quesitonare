/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        343: '343px',
        1.8: '1.8px',
        513: '513px',
        50: '50px',
        0.8: '0.8px',
        47: '37px',
      },
      colors: {
        black: '#232323',
        error: '#F15524',
      },
      borderWidth: {
        DEFAULT: '1px',
        0.8: '0.8px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  plugins: [],
};
