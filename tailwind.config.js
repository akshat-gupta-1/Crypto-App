/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'text-color': '#e8e2fd',
        'background-color': '#060218',
        'primary-button': '#ca66f5',
        'secondary-button': '#2b0323',
        'accent-color': '#e60fbb',
      },
      fontFamily: {
        heading: 'Space Grotesk',
      },
    },
  },
  plugins: [],
};
