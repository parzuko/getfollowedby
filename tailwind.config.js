/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      alliance: ['Alliance', 'sans-serif'],
      august: ['August', 'sans-serif']
    }
  },
  plugins: [],
}
