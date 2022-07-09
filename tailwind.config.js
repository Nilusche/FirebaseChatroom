/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      my_yellow: "#E0A82E",
    }
  },
  plugins: [
    require("daisyui")
  ],
}
