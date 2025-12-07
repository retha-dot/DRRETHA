/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-sage': '#F0F5F0',
        'primary-sage': '#728C69',
        'off-white': '#FAFAFA',
        'heading-grey': '#333333',
        'body-grey': '#555555',
      }
    },
  },
  plugins: [],
}