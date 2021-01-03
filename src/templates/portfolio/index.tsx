import React from 'react';
import './Portfolio.scss';
import { graphql, Link, PageProps } from 'gatsby';
import { Mdx } from '../../graphql-types';
import { useTranslation } from 'react-i18next';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../../components/atoms/Layout';
import GatsbyImage from 'gatsby-image';

interface PortfolioDataProps {
  mdx?: Mdx;
  series?: {
    nodes: Mdx[];
  }
}

const Portfolio = ({ data }: PageProps<PortfolioDataProps>): React.ReactElement => {
  const { t } = useTranslation();
  const portfolio = data.mdx;
  const related = data.series.nodes;

  return (
    <Layout title={portfolio.frontmatter.title}
      description={portfolio.frontmatter.description || portfolio.excerpt}>
      <article
        className="jth-portfolio"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="jth-container jth-portfolio-title">
          <h1 itemProp="headline">{portfolio.frontmatter.title}</h1>
          <p>{portfolio.frontmatter.description}</p>
        </header>
        {portfolio.frontmatter.image &&
          <div className="jth-portfolio-info-image">
            <GatsbyImage
              fluid={portfolio.frontmatter.image.childImageSharp.fluid}
              alt={portfolio.frontmatter.title} />
          </div>}
        <section className="jth-section">
          <div className="jth-portfolio-content jth-container jth-section-repeatColGrid-center">
            {portfolio.frontmatter.brief &&
              <div className="jth-section-rowGrid">
                <>
                  <h2>개요</h2>
                  <p>
                    {portfolio.frontmatter.brief}
                  </p>
                </>
                {portfolio.frontmatter.demo &&
                  <p>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={portfolio.frontmatter.demo}
                      className="jth-external-link"
                    >
                      {portfolio.frontmatter.title} 둘러보기
                  </a>
                  </p>}
              </div>}
            {portfolio.frontmatter.solution &&
              <div className="jth-section-rowGrid">
                <>
                  <h2>방식</h2>
                  <p>
                    {portfolio.frontmatter.solution}
                  </p>
                </>
              </div>}
            {portfolio.frontmatter.results && portfolio.frontmatter.results[0] &&
              <div className="jth-section-rowGrid">
                <>
                  <h2>결과</h2>
                  <ul>
                    {portfolio.frontmatter.results.map((result: string) => <li key={result}>{result}</li>)}
                  </ul>
                </>
              </div>}
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container jth-section-twoColGrid-center">
            <div className="jth-section-rowGrid jth-section-mobileOrder-2">
              {portfolio.frontmatter.logoDescription &&
                <>
                  <h2>로고</h2>
                  <p>
                    {portfolio.frontmatter.logoDescription}
                  </p>
                </>
              }
            </div>
            {portfolio.frontmatter.logo && <img className="jth-portfolio-logo" src={portfolio.frontmatter.logo.publicURL} alt="Logo" />}
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container jth-section-rowGrid">
            {portfolio.frontmatter.builtWith &&
              <>
                <h2>구축 환경</h2>
                <ul>
                  {portfolio.frontmatter.builtWith.map((skill: string) => <li key={skill}>{skill}</li>)}
                </ul>
              </>
            }
            {portfolio.frontmatter.github &&
              <p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={portfolio.frontmatter.github}
                  className="jth-external-link"
                >
                  {portfolio.frontmatter.title} Github 둘러보기
                  </a>
              </p>
            }
          </div>
        </section>
        <MDXRenderer>
          {portfolio.body}
        </MDXRenderer>
      </article>
      {related.length > 0 && (
        <nav className="jth-portfolio-links">
          <section className="jth-container">
            <h2>{t('Portfolio.relatedPosts')}</h2>
            <ol className="jth-container jth-portfolio-relatedPosts">
              {related.map((portfolio) => {
                return (
                  <li key={portfolio.frontmatter.title}>
                    <Link to={portfolio.fields.slug} aria-label={portfolio.frontmatter.title}>
                      {portfolio.frontmatter.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        </nav>
      )}

    </Layout>
  );
};

export default Portfolio;

export const pageQuery = graphql`
  query createPortfolioPage(
    $id: String!
    $series: String
  ) {
    mdx (id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        detailPage
        github
        demo
        brief
        solution
        results
        builtWith
        logo{
          publicURL
        }
        logoDescription
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
  }
`;