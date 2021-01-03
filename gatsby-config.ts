export const siteMetadata = {
  title: `JthCast`,
  author: {
    name: `TaeHoon Jeong`,
    summary: `Front-end developer work with design and technology, so trying to look problems from various perspective to solve them.`,
  },
  description: `Make digital products that people love to use. Don't force them to use it, make them want to use it.`,
  siteUrl: `https://jthcast.dev`,
  social: {
    twitter: ``,
  },
};

export const plugins = [
  `gatsby-plugin-sitemap`,
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
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
      rehypePlugins: [
        require(`rehype-accessible-emojis`).rehypeAccessibleEmojis,
      ],
      remarkPlugins: [require('remark-unwrap-images')],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1040,
            showCaptions: true,
            quality: 90,
            withWebp: true,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            maintainCase: true,
            removeAccents: true,
            isIconAfterHeader: true,
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
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [
                  {
                    'content:encoded': `
                  <p>${
                    edge.node.frontmatter.description
                  }</p><div style="margin-top: 16px;"><a href="${
                      site.siteMetadata.siteUrl + edge.node.fields.slug
                    }">Read this</a></div><br />
                `,
                  },
                ],
              });
            });
          },
          query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {visible: {eq: true}}}
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      description
                      date
                    }
                  }
                }
              }
            }
          `,
          output: '/rss.xml',
          title: "JthCast's RSS Feed",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `JthCast`,
      short_name: `JthCast`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#000000`,
      display: `minimal-ui`,
      icon: `./static/favicon.svg`,
    },
  },
  `gatsby-plugin-react-helmet-async`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
