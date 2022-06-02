module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["alibaba"],
      },
      colors: {
        primary: "#fdb713",
        bg: "#F6F6F6",
        vehiclsContainer:"#E2E6E9",
        svgLogo : "#ff9800",
        closeButton : "#4b5259"
      },
    },
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  plugins: [],
}
