/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["alibaba"],
      },
      boxShadow: {
        'md': '0 0  5px 2px inset #00000026;',
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

      'lg': '1024px',
      // => @media (min-width: 992px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  plugins: [],
  // important: true,
}
