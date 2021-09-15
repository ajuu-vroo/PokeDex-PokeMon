module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage :{
        'img' : "url('https://images.alphacoders.com/998/thumb-1920-998181.jpg')"
      },
      fontFamily:{
        'lol' : " 'Comic Neue', cursive",
        'lmao': "'Bellota', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
