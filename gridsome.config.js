module.exports = {
  siteName: `Thomas Kilgour`,
  titleTemplate: `%s - Thomas Kilgour`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}
