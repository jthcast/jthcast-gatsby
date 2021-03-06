import React from 'react';
import { useTranslation } from 'react-i18next';
import Card, { CardInterface } from '../components/atoms/Card';
import './Home.scss';
import Layout from '../components/atoms/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import { Query } from '../graphql-types';

const Index = ({ data }: PageProps<Query>): React.ReactElement => {
  const postsData: Array<CardInterface> = data.allMdx.nodes;
  const { t } = useTranslation();

  return (
    <Layout title={t('Common.title')} description={t('Common.description')}>
      <section className="jth-section">
        <div
          className="jth-container jth-animation"
          data-animationtype="opacityUp"
        >
          <h1>{t('Home.greetMessage')}</h1>
          <p>{t('Home.greetSubMessage')}</p>
        </div>
      </section>
      {postsData && postsData.length > 0 && (
        <section className="jth-home jth-container">
          <h2 className="jth-animation" data-animationtype="opacityUp">{t('Home.recentPosts')}</h2>
          <ul className="jth-home-posts">
            {postsData.map((post) => {
              return (
                <li key={post.fields.slug} className="jth-animation" data-animationtype="opacityUp">
                  <Link to={post.fields.slug} aria-label={post.frontmatter.title}>
                    <Card showContent item={post} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </Layout>
  );
};

export default Index;

export const query = graphql`
    query {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(content/posts)/"}, frontmatter: {visible: {eq: true}}}, limit: 3) {
        nodes {
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            image {
              ...TitleImage
            }
            series
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `;