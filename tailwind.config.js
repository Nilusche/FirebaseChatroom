/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      myyellow: "#E0A82E",
      mygrey: "#73777B"
    }
  },
  plugins: [
    require("daisyui")
  ],
}
