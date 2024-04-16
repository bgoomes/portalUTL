/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'stihl-bold' : ['stihl_contraface_textbold', 'sans-serif'],
        'stihl-regular': ['stihl_contraface_textregular', 'sans-serif'],
        'stihl-light': ['stihl_contraface_text_lightRg', 'sans-serif'],
        'stihl-display': ['stihl_contraface_display_tiRg', 'sans-serif']
      },
      colors: {
        'laranjaStihl': '#f37a1f',
        'HEADINGS': '#333333'
      }
    },
  },
  plugins: [],
}