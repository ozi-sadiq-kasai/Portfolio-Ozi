/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '600px',
      // => @media (min-width: 600px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    backgroundColor:{
     "army":"#a3b18a",
     "light-army":"#e9edc9"
    },
    colors:{
      "charcol":"#495057",
      "light-army":"#e9edc9",
      "army":"#a3b18a",
      "darkarmy":"#2d6a4f"

    }
    },
  },
  plugins: [],
}
