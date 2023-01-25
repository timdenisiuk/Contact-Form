/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,t,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merriweather: "'Merriweather', serif",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
