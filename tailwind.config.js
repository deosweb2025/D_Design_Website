/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          1: '#000000',
          2: '#242121',
          3: '#151515',
          4: '#111518',
          5: '#E9EBEC',
          6: '#F4F5F6',
          7: '#ffffff',
          8: '#ffffff',
        },
        theme: {
          bg: '#000000',
          subfooter: '#241E20',
          text: '#e5e5e5',
          muted: '#E9EBEC',
          link: '#dcc0c0',
          linkHover: '#ffffff',
          copyright: '#F4F5F6',
          copyrightLink: '#ffd6d6',
          drawer: 'rgba(18, 21, 26, 0.95)',
          sticky: 'rgba(0, 0, 0, 0.8)',
          stickyBorder: 'rgba(157, 157, 157, 0.85)',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      maxWidth: {
        'container': '1290px',
        'heading': '630px',
        'narrow': '750px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}

