import React from 'react';
import './Code.scss';
import { graphql, Link, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import { Mdx } from '../../graphql-types';
import { useTranslation } from 'react-i18next';
import GatsbyImage from 'gatsby-image';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IconTemplate } from '../../components/atoms/Icons';

interface CodeDataProps {
  mdx?: Mdx;
  related?: {
    nodes: Mdx[];
  }
}

const CodePostTemplate = ({ data }: PageProps<CodeDataProps>) => {
  const { t } = useTranslation();
  const code = data.mdx;
  const related = data.related.nodes;

  return (
    <Layout title={code.frontmatter.title}
      description={code.frontmatter.description || code.excerpt}>
      <article
        className="jth-container jth-code"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="jth-code-info">
          <h1 itemProp="headline">{code.frontmatter.title}</h1>
          {code.frontmatter.tags && <p>{code.frontmatter.tags.join(' / ')}</p>}
          <p>{code.frontmatter.date}</p>
          {code.frontmatter.image &&
            <div className="jth-code-info-image">
              <GatsbyImage
                fluid={code.frontmatter.image.childImageSharp.fluid}
                alt={code.frontmatter.title} />
            </div>}
          <p className="jth-code-info-content">{code.frontmatter.description}</p>
        </header>
        <section className="jth-code-content" itemProp="articleBody">
          <MDXRenderer scope className="jth-code-content">
            {code.body}
          </MDXRenderer>
        </section>
      </article>
      <nav className="jth-code-links jth-container">
        {related.length > 0 && (
          <section>
            <h2>{t('Code.relatedCodes')}</h2>
            <ul className="jth-code-relatedCodes">
              {related.map((code) => {
                return (
                  <li key={code.fields.slug}>
                    <Link to={code.fields.slug} aria-label={code.frontmatter.title}>
                      {code.frontmatter.icon && IconTemplate({ iconName: code.frontmatter.icon })}
                      <p>{code.frontmatter.title}</p>
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

export default CodePostTemplate;

export const pageQuery = graphql`
  query createCodePage(
    $id: String!
    $tag: [String]
  ) {
    mdx (id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        icon
        tags
      }
    }
    related: allMdx(filter: {frontmatter: {visible: {eq: true}, tags: {in: $tag}}, fileAbsolutePath: {regex: "/(content/codes)/"}, id: {ne: $id}}, limit: 3) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          icon
        }
      }
    }
  }
`;
