/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'EB Garamond', serif",
      },
      padding: {
        main: "3rem 3.5rem",
      },
      fontSize:{
        logo:"2rem"
      },

    },
  },
  plugins: [],
};
