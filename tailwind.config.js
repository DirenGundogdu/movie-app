module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navbar-color': '#032541',
        'gradient-one': '#c0fecf',
        'gradient-two': '#1ed5a9',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
