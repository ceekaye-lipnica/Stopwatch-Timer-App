/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark" : '#333333',
        "light" : '#f8f8f8',
        "primary" : '#ffda29',
      },
    },
  },
  plugins: [],
}