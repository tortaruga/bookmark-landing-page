/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
       'icon-twitter': "url('./images.icon-twitter.svg')",
       'icon-facebook': "url('./images.icon-facebook.svg')",
      },
      flexGrow: {
        'flex-grow-2': '2'
      },
      letterSpacing: {
        extra: '0.3rem'
      },
      fontFamily: {
         'myFont': ['Rubik, sans-serif'],
      },
    colors: {
      primary: {
        100: 'hsl(231, 69%, 60%)',
        200: 'hsl(229, 8%, 60%)',
        300:  'hsl(229, 31%, 21%)',
      },
      accent: 'hsl(0, 94%, 66%)'
    }
  },
  plugins: [],
}  
}
