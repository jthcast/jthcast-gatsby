import {
  Actions,
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
  CreateWebpackConfigArgs,
} from 'gatsby';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

function createMdxPages(actions: Actions, nodes: any[], pageTemplate: string) {
  const { createPage } = actions;

  if (nodes && nodes.length > 0) {
    nodes.forEach((node, index) => {
      const previousNodeId = index === 0 ? null : nodes[index - 1].id;
      const nextNodeId =
        index === nodes.length - 1 ? null : nodes[index + 1].id;

      createPage({
        path: `${node.fields?.slug}` || '/404',
        component: pageTemplate,
        context: {
          id: node.id,
          previousNodeId,
          nextNodeId,
        },
      });
    });
  }
}

interface Post {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    series: string;
    tags: string[];
  };
}

interface Code {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    tags: string[];
  };
}

interface Portfolio {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    series: string;
  };
}

function createPostPages(
  actions: Actions,
  posts: Post[],
  postTemplate: string
) {
  const { createPage } = actions;

  if (posts && posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `${post.fields?.slug}` || '/404',
        component: postTemplate,
        context: {
          id: post.id,
          series: post.frontmatter.series,
          tags: post.frontmatter.tags,
        },
      });
    });
  }
}

function createCodePages(
  actions: Actions,
  codes: Code[],
  codeTemplate: string
) {
  const { createPage } = actions;

  if (codes && codes.length > 0) {
    codes.forEach(post => {
      createPage({
        path: `${post.fields?.slug}` || '/404',
        component: codeTemplate,
        context: {
          id: post.id,
          tags: post.frontmatter.tags,
        },
      });
    });
  }
}

function createPortfolioPages(
  actions: Actions,
  portfolio: Portfolio[],
  portfolioTemplate: string
) {
  const { createPage } = actions;

  if (portfolio && portfolio.length > 0) {
    portfolio.forEach(portfolio => {
      createPage({
        path: `${portfolio.fields?.slug}` || '/404',
        component: portfolioTemplate,
        context: {
          id: portfolio.id,
          series: portfolio.frontmatter.series,
        },
      });
    });
  }
}

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  // Define a template for blog post
  const postTemplate = path.resolve(`./src/templates/post/index.tsx`);
  const codeTemplate = path.resolve(`./src/templates/code/index.tsx`);
  const portfolioTemplate = path.resolve(`./src/templates/portfolio/index.tsx`);

  // Get all markdown blog posts sorted by date
  const { data, errors } = await graphql<any>(
    `
      {
        posts: allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/(content/posts)/" }
            frontmatter: { visible: { eq: true } }
          }
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              series
              tags
            }
          }
        }
        codes: allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/(content/codes)/" }
            frontmatter: { visible: { eq: true } }
          }
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
        portfolios: allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/(content/portfolios)/" }
            frontmatter: { visible: { eq: true } }
          }
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              series
            }
          }
        }
      }
    `
  );
  if (errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, errors);
    return;
  }

  const posts: Post[] = data?.posts.nodes;
  const codes: Code[] = data?.codes.nodes;
  const portfolios: Portfolio[] = data?.portfolios.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  createPostPages(actions, posts, postTemplate);
  createCodePages(actions, codes, codeTemplate);
  createPortfolioPages(actions, portfolios, portfolioTemplate);
};

export const onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};

export const onCreateWebpackConfig = ({
  stage,
  actions,
}: CreateWebpackConfigArgs) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};
