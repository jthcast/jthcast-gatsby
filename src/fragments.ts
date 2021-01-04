import { graphql } from 'gatsby';

export const titleImage = graphql`
  fragment TitleImage on File {
    childImageSharp {
      fluid(maxWidth: 1200, maxHeight: 630, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;
