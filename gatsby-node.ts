import {
  Actions,
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
} from 'gatsby';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { Mdx } from './src/graphql-types';

function createMdxPages(actions: Actions, nodes: Mdx[], pageTemplate: string) {
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

function createPostPages(
  actions: Actions,
  posts: Post[],
  postTemplate: string
) {
  const { createPage } = actions;

  if (posts && posts.length > 0) {
    posts.forEach(post => {
      const series = post.frontmatter.series;
      const tag = post.frontmatter.tags ? post.frontmatter.tags[0] : '';

      createPage({
        path: `${post.fields?.slug}` || '/404',
        component: postTemplate,
        context: {
          id: post.id,
          series,
          tag,
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
          filter: { fileAbsolutePath: { regex: "/(content/posts)/" } }
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
          filter: { fileAbsolutePath: { regex: "/(content/codes)/" } }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
        portfolios: allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(content/portfolios)/" } }
        ) {
          nodes {
            id
            fields {
              slug
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
  const codes: Mdx[] = data?.codes.nodes;
  const portfolios: Mdx[] = data?.portfolios.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  createPostPages(actions, posts, postTemplate);
  createMdxPages(actions, codes, codeTemplate);
  createMdxPages(actions, portfolios, portfolioTemplate);
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
