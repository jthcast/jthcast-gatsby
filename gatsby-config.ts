export const siteMetadata = {
  title: `JthCast`,
  author: {
    name: `TaeHoon Jeong`,
    summary: `Front-end developer work with design and technology, so trying to look problems from various perspective to solve them.`,
  },
  description: `Make digital products that people love to use. Don't force them to use it, make them want to use it.`,
  siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
  social: {
    twitter: ``,
  },
};

export const plugins = [
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-generate-typings`,
    options: {
      dest: `./src/graphql-types.d.ts`,
    },
  },
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/`,
      name: `src`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/`,
      name: `content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/static/`,
      name: `static`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 630,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      //trackingId: `ADD YOUR TRACKING ID HERE`,
    },
  },
  `gatsby-plugin-feed`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `JthCast`,
      short_name: `JthCast`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#000000`,
      display: `minimal-ui`,
      icon: `static/favicon.svg`,
    },
  },
  `gatsby-plugin-react-helmet-async`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
