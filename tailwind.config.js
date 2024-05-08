/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "rgba(240, 240,  242, <alpha-value>)",
        silver: "rgba(251, 251,  251, <alpha-value>)",
        "light-blue": "rgba(187, 222, 255, <alpha-value>)",
        blue: {
          900: "rgba(15, 81, 140, <alpha-value>)",
        },
        dark: "rgba(0, 36, 69, <alpha-value>)",
      },
    },
  },
  plugins: [],
};
