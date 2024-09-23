/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#042A2B',
        'light-sea-green': '#0DABAB',
        'moonstone': '#5EB1BF',
        'straw': '#F6E879',
        'off-white': '#FCFCFC', // Beyaz yerine kullanılacak renk
      },
    },
  },
  plugins: [],
}

