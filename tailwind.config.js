module.exports = {
  theme: {
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
