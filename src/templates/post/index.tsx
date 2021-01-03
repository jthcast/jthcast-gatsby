import React, { Fragment } from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/atoms/Layout';
import './Post.scss';
import { useTranslation } from 'react-i18next';
import GatsbyImage from 'gatsby-image';
import Card from '../../components/atoms/Card';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Mdx } from '../../graphql-types';
import { IconTemplate } from '../../components/atoms/Icons';

interface PostDataProps {
  mdx?: Mdx;
  series?: {
    nodes: Mdx[];
  }
  related?: {
    nodes: Mdx[];
  }
}

const Post = ({ data }: PageProps<PostDataProps>): React.ReactElement => {
  const { t } = useTranslation();
  const post = data.mdx;
  const series = data.series.nodes;
  const related = data.related.nodes;

  return (
    <Layout title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}>
      <article
        className="jth-container jth-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="jth-post-info">
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          {post.frontmatter.tags && <p>{post.frontmatter.tags.join(' / ')}</p>}
          <p>{post.frontmatter.date}</p>
          {post.frontmatter.image &&
            <div className="jth-post-info-image">
              <GatsbyImage
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt={post.frontmatter.title} />
            </div>}
          <p className="jth-post-info-content">{post.frontmatter.description}</p>
        </header>
        <section className="jth-post-content" itemProp="articleBody">
          <IconTemplate iconName="IconWaveLine" className="jth-post-separator" />
          <MDXRenderer className="jth-post-content">
            {post.body}
          </MDXRenderer>
          <IconTemplate iconName="IconWaveLine" className="jth-post-separator" />
        </section>
      </article>
      <nav className="jth-post-links jth-container">
        {series.length > 1 && (
          <section>
            <h2>{t('Post.seriesPosts')}</h2>
            <ol className="jth-post-seriesPosts">
              {series.map((seriesPost) => {
                return (
                  <Fragment key={seriesPost.fields.slug}>
                    {seriesPost.frontmatter.title === post.frontmatter.title ? (
                      <li className="jth-post-seriesPosts-this">
                        <p>{seriesPost.frontmatter.title}</p>
                      </li>
                    ) : (
                        <li>
                          <Link
                            to={seriesPost.fields.slug}
                            aria-label={seriesPost.frontmatter.title}
                          >
                            {seriesPost.frontmatter.title}
                          </Link>
                        </li>
                      )}
                  </Fragment>
                );
              })}
            </ol>
          </section>
        )}
        {related.length > 0 && (
          <section>
            <h2>{t('Post.relatedPosts')}</h2>
            <ul className="jth-post-relatedPosts">
              {related.map((post) => {
                return (
                  <li key={post.fields.slug}>
                    <Link to={post.fields.slug} aria-label={post.frontmatter.title}>
                      <Card showContent item={post} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </nav>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query createPostPage(
    $id: String!
    $series: String
    $tag: [String]
  ) {
    mdx (id: { eq: $id }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1160, maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        series
        tags
      }
    }
    series: allMdx(filter: {frontmatter: {visible: { eq: true }, series: {eq: $series, ne: null }}, fileAbsolutePath: {regex: "/(content/posts)/"}}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
    related: allMdx(filter: {frontmatter: {visible: {eq: true}, tags: {in: $tag}}, fileAbsolutePath: {regex: "/(content/posts)/"}, id: {ne: $id}}, limit: 2) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1160, maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          tags
        }
      }
    }
  }
`;