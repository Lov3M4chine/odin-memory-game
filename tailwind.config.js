/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: { 'game-bg': "url('/src/assets/background.png')" }
    }
  },
  plugins: []
}
