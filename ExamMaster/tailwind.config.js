/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1280px',
      },
      colors:{
        'purple': '#E43EFF'
      },
      boxShadow: {
        'card': '10px 0 2px -5px #E43EFF, 0 -4px 10px -5px #000000'
      }
    },
  },
  plugins: [],
}

