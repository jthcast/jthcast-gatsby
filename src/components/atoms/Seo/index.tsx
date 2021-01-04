/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';
import { Query } from '../../../graphql-types';
import { useRecoilValue } from 'recoil';
import { initialLanguageMode } from '../../../recoilStates';
import { useLocation } from '@reach/router';

type seoProps = {
  description?: string,
  lang?: string,
  meta?: ConcatArray<{ name: string; content: any; property?: undefined; }>,
  title?: string,
  image?: string,
  author?: string,
  publishDate?: string,
}

const SEO = ({ description = '', lang = 'ko', meta = [], title, image, author, publishDate }: seoProps) => {
  const { pathname } = useLocation();
  const { site }: Query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
            image
            author{
              name
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata?.title;
  const metaAuthor = author || site.siteMetadata?.author.name;
  const metaPublishDate = publishDate;
  const defaultTitle = site.siteMetadata?.title;
  const defaultImage = site.siteMetadata?.image;
  const siteUrl = site.siteMetadata?.siteUrl;
  lang = useRecoilValue(initialLanguageMode);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle && defaultTitle !== title ? `%s - ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          itemprop: `datePublished`,
          content: metaPublishDate,
        },
        {
          property: `article:published_time`,
          content: metaPublishDate,
        },
        {
          name: `og:url`,
          content: `${siteUrl}${pathname}`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${image || defaultImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
