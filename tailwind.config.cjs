/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(20, 20, 20, 1)",
        secondary: "rgba(255, 255, 255, 1)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        accent: "rgba(0, 229, 245, 0.6)",
      },  
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "780px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
