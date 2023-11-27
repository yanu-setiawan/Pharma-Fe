/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_main: "url('asset/Background.svg')",
        bg_cta: "url('asset/cta.svg')",
        bg_service: "url('asset/services/banner.svg')",
      },
      fontFamily: {
        Inter: "'Inter', sans-serif",
        Lato: "'Lato', sans-serif",
        Montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        primary: "#0152A8",
        green: "#0fe3af",
      },
      textColor: {
        header1: "#143450",
        header2: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
