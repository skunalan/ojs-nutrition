/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "rgba(255, 255, 255)",
        foreground: "rgba(0, 0, 0)",
        primary: "rgb(34, 32, 168)",
        warning: "rgb(255, 116, 31)",
        muted: "rgb(247, 247, 247)",
      },
    },
  },
  plugins: [],
};
