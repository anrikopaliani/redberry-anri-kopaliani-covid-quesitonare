/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        343: '21.438rem',
        400: '25rem',
        1.8: '0.113rem',
        513: '32.063rem',
        50: '3.125rem',
        0.8: '0.05rem',
        47: '2.938rem',
        622: '38.875rem',
        606: '37.875rem',
        703: '43.938rem',
        949: '59.313rem',
        800: '50rem',
      },
      colors: {
        theme: '#eaeaea',
        black: '#232323',
        error: '#F15524',
        hint: '#626262',
        submitButtonColor: '#208298',
        link: '#1289AE',
        credentialsDivColor: '#D6D16E',
      },
      borderWidth: {
        0.8: '0.05rem',
      },
      lineHeight: {
        76: '4.8rem',
      },
    },
  },
  plugins: [],
};
