/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fisio-primary': '#078853',
        'fisio-secondary': '#89C6AD',
        'fisio-tertiary': '#B5DBCC',
        'fisio-background': '#F0F7F4',
      }
    },
  },
  plugins: [],
}