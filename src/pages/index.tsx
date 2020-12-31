import React from "react";
import Layout from "../components/layout";
import { Query } from "../graphql-types";
import { useTranslation } from "react-i18next";
import { Link, graphql, useStaticQuery } from "gatsby";

const Index = (): React.ReactElement => {
  const query: Query = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `);
  const posts = query.allMdx.nodes;
  const { t } = useTranslation();

  if (posts.length === 0) {
    return (
      <Layout title={t('Common.title')}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={t('Common.title')}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields?.slug || ''} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter?.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter?.description || post.excerpt || '',
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index
