import React from 'react';
import GatsbyImage, { FixedObject, FluidObject } from "gatsby-image";
import './Card.scss';

export interface CardInterface {
  excerpt?: string;
  frontmatter?: {
    date?: string;
    title?: string;
    image?: {
      childImageSharp?: {
        fluid?: FluidObject;
        fixed?: FixedObject;
      }
    }
    series?: string;
    tags?: string[];
  }
  fields?: {
    slug?: string;
  }
}

interface CardProps {
  className?: string;
  item?: CardInterface;
  showContent?: boolean;
}

const Card = ({
  className,
  item,
  showContent = false,
}: CardProps): React.ReactElement => {
  return (
    <>
      {item && (
        <div className={`jth-card${className ? ` ${className}` : ``}`}>
          {item.frontmatter.image &&
            <div className="jth-card-image">
              <GatsbyImage
                fluid={item.frontmatter.image.childImageSharp.fluid && item.frontmatter.image.childImageSharp.fluid}
                fixed={item.frontmatter.image.childImageSharp.fixed && item.frontmatter.image.childImageSharp.fixed}
                alt={item.frontmatter.title} />
            </div>}
          {(item.frontmatter.tags || item.frontmatter.date) && (
            <div className="jth-card-info">
              {<span className="jth-card-tags">{item.frontmatter.tags && item.frontmatter.tags.join(' / ')}</span>}
              {<time dateTime={item.frontmatter.date && item.frontmatter.date} className="jth-card-date">
                {item.frontmatter.date && item.frontmatter.date}
              </time>}
            </div>
          )}
          {item.frontmatter.title && <h2>{item.frontmatter.title}</h2>}
          {item.excerpt && showContent && <p>{item.excerpt}</p>}
        </div>
      )}
    </>
  );
};

export default Card;
