import React, { Fragment, useEffect } from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/atoms/Layout';
import './Post.scss';
import { useTranslation } from 'react-i18next';
import GatsbyImage from 'gatsby-image';
import Card from '../../components/atoms/Card';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IconTemplate } from '../../components/atoms/Icons';
import '../../fragments';

const Post = ({ data }: PageProps<any>): React.ReactElement => {
  const { t } = useTranslation();
  const post = data.mdx;
  const series = data.series.nodes;
  const related = data.related.nodes;
  // const [viewCount, setViewCount] = useState(undefined);

  useEffect(() => {
    const getViewCount = async () => {
      const fetchData = await fetch('/api/view-counter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: data.mdx.fields.slug,
          publishDate: data.mdx.frontmatter.date
        })
      });
      await fetchData.json();
      // const result = await fetchData.json();
      // setViewCount(result.Attributes.viewCount.N);
    }
    getViewCount();
  }, [data.mdx.fields.slug, data.mdx.frontmatter.date]);

  return (
    <Layout title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      image={post.frontmatter.image.publicURL}
      // author={post.frontmatter.author}
      publishDate={post.frontmatter.date}
    >
      <article
        className="jth-container jth-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="jth-post-info">
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div>
            {post.frontmatter.tags && <p>{post.frontmatter.tags.join(' / ')}</p>}
            <p>{post.frontmatter.date}</p>
          </div>
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
        {/* <footer className="jth-post-info">
          <p><span role="img" aria-label="Eyes">👀 </span>{viewCount}</p>
        </footer> */}
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
    $tags: [String]
  ) {
    mdx (id: { eq: $id }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image {
          ...TitleImage
          publicURL
        }
        series
        tags
      }
      fields {
        slug
      }
    }
    series: allMdx(sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {visible: { eq: true }, series: {eq: $series, ne: "" }}, fileAbsolutePath: {regex: "/(content/posts)/"}}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
    related: allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {visible: {eq: true}, tags: {in: $tags}}, fileAbsolutePath: {regex: "/(content/posts)/"}, id: {ne: $id}}, limit: 2) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          image {
            ...TitleImage
          }
          tags
        }
      }
    }
  }
`;