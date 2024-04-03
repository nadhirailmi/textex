/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary1:'#000E31',
        primary2:'#439825',
        primary3: '#D0BB00'
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}
