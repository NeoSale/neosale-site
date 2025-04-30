/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#403CCF', // NeoSale primary color (dark blue-purple)
        'light-bg': '#FBFAFF', // Alternative light background
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Main font
        inter: ['Inter', 'sans-serif'], // Secondary font
      },
    },
  },
  plugins: [],
}
