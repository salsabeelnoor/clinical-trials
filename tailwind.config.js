/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'light_green': '#00BFB2',
      'orange': '#ED8B00',
      'dark_gray': '#333F48',
      'bottle_green': '#004C45',
      'green': '#09958B',
      'gray': '#9497A2',
      'light_gray': '#F3F5F8'
      },
      fontFamily: {
        mynerve: ["'Mynerve'", "cursive"],
        open_sans: ["'Open Sans'", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "1fr 3fr",
        mobile_layout: "1fr",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}

