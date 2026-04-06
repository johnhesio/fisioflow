/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        physio: {
          dark: '#078853',
          medium: '#89C6AD',
          soft: '#B5DBCC',
          bg: '#F0F7F4'
        }
      }
    },
  },
  plugins: [],
}