/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateClockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-clockwise": "rotateClockwise 10s linear infinite",
      },
      colors: {
        header: "var(--header-bg-color)",
        footer: "var(--footer-bg-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        cartlogobg: "var(--cart-logo-bg-color)",
      },
    },
  },
  plugins: [],
};
