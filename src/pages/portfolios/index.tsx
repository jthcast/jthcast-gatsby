import React from 'react';
import Img, { FixedObject, FluidObject } from "gatsby-image";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { IconGithub, IconPlay } from '../../components/atoms/Icons';
import Layout from '../../components/layout';
import './Portfolios.scss';

export interface PortfoliosProps {
  excerpt?: string;
  frontmatter?: {
    title?: string;
    date?: string;
    description?: string;
    image?: {
      childImageSharp?: {
        fluid?: FluidObject;
        fixed?: FixedObject;
      }
    }
    series?: string;
    detailPage?: boolean;
    github?: string;
    demo?: string;
    visible?: boolean;
  }
  fields?: {
    slug?: string;
  }
}

const Portfolios = (): React.ReactElement => {
  const query = useStaticQuery(graphql`
    query AllPortfolios{
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(content/portfolios)/"}, frontmatter: {visible: {eq: true}}}) {
        nodes {
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            series
            detailPage
            github
            demo
            visible
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const portfolios: Array<PortfoliosProps> = query.allMarkdownRemark.nodes;
  const { t } = useTranslation();
  return (
    <Layout title={t('Portfolios.title')} description={t('Portfolios.description')}>
      <section className="jth-portfolios">
        <div className="jth-container">
          {portfolios.length === 0 && (
            <div className="jth-portfolios-nothing">
              <h1>{t('Portfolios.portfolioDoesntExistMessage')}</h1>
            </div>
          )}
          {portfolios.length > 0 && (
            <ul className="jth-portfolios-list">
              {portfolios.map((portfolio) => {
                return (
                  <li key={portfolio.fields.slug}>
                    <article className="jth-portfolios-item">
                      {portfolio.frontmatter.image && portfolio.frontmatter.detailPage && (
                        <Link
                          to={portfolio.fields.slug}
                          aria-label={portfolio.frontmatter.title}
                        >
                          <Img fluid={portfolio.frontmatter.image.childImageSharp.fluid} alt={portfolio.frontmatter.title} />
                        </Link>
                      )}
                      <div className="jth-portfolios-item-info">
                        {portfolio.frontmatter.title && portfolio.frontmatter.detailPage ? (
                          <Link
                            to={portfolio.fields.slug}
                            aria-label={portfolio.frontmatter.title}
                          >
                            <h2>{portfolio.frontmatter.title}</h2>
                          </Link>
                        ) : (
                            <h2>{portfolio.frontmatter.title}</h2>
                          )}
                        <div className="jth-portfolios-item-info-links">
                          {portfolio.frontmatter.github && (
                            <a
                              href={portfolio.frontmatter.github}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="github"
                            >
                              <IconGithub />
                            </a>
                          )}
                          {portfolio.frontmatter.demo && (
                            <a
                              href={portfolio.frontmatter.demo}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="github"
                            >
                              <IconPlay className="jth-portfolios-item-info-play" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p>{portfolio.frontmatter.description}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolios;
