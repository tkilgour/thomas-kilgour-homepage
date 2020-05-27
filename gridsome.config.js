const marked = require("marked");

module.exports = {
  siteName: `Thomas Kilgour`,
  siteUrl: "https://kilgour.co",
  titleTemplate: `%s - Thomas Kilgour`,

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "BlogPost",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "@gridsome/source-graphql",
      options: {
        url: "https://api.github.com/graphql",
        fieldName: "github",
        typeName: "Github",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      use: "@microflash/gridsome-plugin-feed",
      options: {
        contentTypes: ["BlogPost"],
        feedOptions: {
          title: "Thomas Kilgour – Blog",
          description: "Thoughts on web development and other things.",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        json: {
          enabled: true,
          output: "/feed.json",
        },

        // (optional) number of items to include in a feed
        maxItems: 25,

        // (optional) an array of properties to be parsed as HTML
        // Converts relative URLs to absolute URLs
        // You can disable this by omitting the option
        htmlFields: ["content"],

        // (optional) appends a trailing slash to the URLs
        enforceTrailingSlashes: false,

        // (optional) a function to filter out the nodes
        // e.g., filter out all outdated posts, filterNodes: (node) => !!node.outdated
        filterNodes: (node) => true,

        // (optional) sets the properties on each feed item
        // See https://github.com/jpmonette/feed#example for all options
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: marked(node.content),
        }),
      },
    },
  ],

  templates: {
    BlogPost: "/:slug",
  },
};
