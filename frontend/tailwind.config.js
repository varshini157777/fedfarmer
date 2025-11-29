/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eafff5',
          100: '#c6ffe4',
          200: '#8dfdcc',
          300: '#4ef8b1',
          400: '#17e493',
          500: '#00c278',
          600: '#00a267',
          700: '#007b4f',
          800: '#00573a',
          900: '#003527',
        },
        slateglass: 'rgba(15,23,42,0.85)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
      boxShadow: {
        'soft-neon': '0 20px 60px rgba(16, 185, 129, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
