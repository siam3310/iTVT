const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'vw-header': 'calc(100% - 30px)',
      },
      screens: {
        'bigger': '3000px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

