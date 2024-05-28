/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f3faf4',
          '100': '#e4f4e8',
          '200': '#cae8d2',
          '300': '#a0d5ad',
          '400': '#6fb982',
          '500': '#4b9c60',
          '600': '#39804b',
          '700': '#336c42',
          '800': '#2a5135',
          '900': '#24432d',
          '950': '#0f2416',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
