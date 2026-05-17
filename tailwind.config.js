/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 IMPORTANT
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      signature: ["Caveat", "cursive"],
      main: ["Poppins", "sans-serif"],
    },
  },
},
  plugins: [],
};
