import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconGithub, IconPlay } from '../../components/atoms/Icons';
import Layout from '../../components/layout';
import { Query } from '../../graphql-types';
import './Portfolios.scss';

const Portfolios = (): JSX.Element => {
  const query: Query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  const portfolios = query.allMarkdownRemark.nodes;
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
              {/* {portfolios.map((portfolio) => {
                return (
                  <li key={portfolio.seq}>
                    <article className="jth-portfolios-item">
                      {portfolio.image && (
                        <Link
                          to={`/portfolio/${portfolio.seq}`}
                          aria-label={portfolio.title}
                        >
                          <img src={portfolio.image} alt={portfolio.title} />
                        </Link>
                      )}
                      <div className="jth-portfolios-item-info">
                        {portfolio.title && portfolio.detailPage ? (
                          <Link
                            to={`/portfolio/${portfolio.seq}`}
                            aria-label={portfolio.title}
                          >
                            <h2>{portfolio.title}</h2>
                          </Link>
                        ) : (
                          <h2>{portfolio.title}</h2>
                        )}
                        <div className="jth-portfolios-item-info-links">
                          {portfolio.github && (
                            <a
                              href={portfolio.github}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="github"
                            >
                              <IconGithub />
                            </a>
                          )}
                          {portfolio.demo && (
                            <a
                              href={portfolio.demo}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="github"
                            >
                              <IconPlay className="jth-portfolios-item-info-play" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p>{portfolio.content}</p>
                    </article>
                  </li>
                );
              })} */}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolios;
