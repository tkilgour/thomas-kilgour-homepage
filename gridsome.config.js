module.exports = {
  siteName: `Thomas Kilgour`,
  titleTemplate: `%s - Thomas Kilgour`,

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api.github.com/graphql',
        fieldName: 'github',
        typeName: 'Github',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    }
  ],

  templates: {
    BlogPost: '/:slug'
  }
}
