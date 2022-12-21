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
        xs: "480px",
        ss: "620px",
        sm: "780px",
        md: "1060px",
        lg: "1200px",
        zl: "1600px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}



// 51, 153, 137
// 125, 226, 209
// primary: "rgb(20,20,20)",
//         secondary: "rgb(5, 5, 60)",
//         fifth: "rgb(43, 106, 188)",
//         accent: "rgb(55, 145, 195)",