/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: "#06a37e",
      lightGreen: "#E5F9E9",
      teal: "#fefef2",
      aquaBlue: "#021939",
      caribbeanGreen: "#01CB9B",
    }
  },
  plugins: [],
}