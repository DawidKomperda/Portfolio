/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0c10",
        secondary: "#22222f",
        third: "#050516",
        accent: "#399ACE",
      },  
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        ml: "380px",
        xs: "480px",
        ss: "620px",
        sm: "780px",
        md: "1060px",
        lg: "1200px",
        zl: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}