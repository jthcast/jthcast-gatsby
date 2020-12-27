import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconSpinner } from '../../components/atoms/Icons';
import ErrorBoundary from '../../components/atoms/ErrorBoundary';
import './Code.scss';
import { graphql, Link, PageProps } from 'gatsby';
import { MarkdownRemark } from '../../graphql-types';
import Layout from '../../components/layout';

type codePostTemplateProps = {
  site: {
    siteMetadata: {
      title: string
    }
  },
  markdownRemark: MarkdownRemark,
  previous: MarkdownRemark,
  next: MarkdownRemark,
}

const CodePostTemplate = ({ data }: PageProps<codePostTemplateProps>) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default CodePostTemplate;

export const pageQuery = graphql`
  query getCodePostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
