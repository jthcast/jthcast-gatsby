import React from 'react';
import './About.scss';
import { useTranslation } from 'react-i18next';
import Accordion from '../../components/atoms/Accordion';
import {
  IconCommentDots,
  IconEnvelope,
  IconGithub,
  IconLaptopCode,
  IconLinkedIn,
  IconObjectGroup,
  IconUserTie,
} from '../../components/atoms/Icons';
import Button from '../../components/atoms/Button';
import Layout from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";

type aboutQueryProps = {
  file: {
    id: string,
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const About = (): React.ReactElement => {
  const { t } = useTranslation();
  const query: aboutQueryProps = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "resources/images/myPhoto.jpg"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout title={t('About.title')} description={t('About.description')}>
      <section className="jth-about">
        <section className="jth-section">
          <div className="jth-container jth-section-twoColGrid-center">
            <div
              className="jth-section-rowGrid jth-section-mobileOrder-2 jth-animation"
              data-animationtype="opacityUp"
            >
              <h1>{t('About.aboutMessage')}</h1>
              <p>{t('About.introduceMyself')}</p>
              <p>{t('About.aboutSubMessage')}</p>
              <div className="jth-about-contact">
                <a
                  href="https://github.com/jthcast"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <IconGithub />
                </a>
                <a
                  href="https://linkedin.com/in/jthcast"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedIn"
                >
                  <IconLinkedIn />
                </a>
                <a href="mailto:jthcast@gmail.com" aria-label="mail">
                  <IconEnvelope />
                </a>
              </div>
            </div>
            <div className="jth-about-photo jth-animation" data-animationtype="opacityUp">
              <Img fluid={query.file.childImageSharp.fluid} alt="My photo" />
            </div>
          </div>
        </section>
        <section className="jth-section jth-about-manifesto">
          <div className="jth-container jth-section-twoColGrid">
            <h2 className="jth-animation" data-animationtype="opacityUp">
              {t('About.myManifesto')}
            </h2>
            <ol>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto1')}>
                  <p>{t('About.manifesto1Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto2')}>
                  <p>{t('About.manifesto2Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto3')}>
                  <p>{t('About.manifesto3Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto4')}>
                  <p>{t('About.manifesto4Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto5')}>
                  <p>{t('About.manifesto5Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto6')}>
                  <p>{t('About.manifesto6Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto7')}>
                  <p>{t('About.manifesto7Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto8')}>
                  <p>{t('About.manifesto8Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto9')}>
                  <p>{t('About.manifesto9Detail')}</p>
                </Accordion>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <Accordion showIcon title={t('About.manifesto10')}>
                  <p>{t('About.manifesto10Detail')}</p>
                </Accordion>
              </li>
            </ol>
          </div>
        </section>
        <section className="jth-section">
          <div
            className="jth-container jth-section-rowGrid jth-section-maxWidth-70 jth-animation"
            data-animationtype="opacityUp"
          >
            <h3>{t('About.summary')}</h3>
            <p>{t('About.summarySubMessage')}</p>
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container">
            <div className="jth-about-experience">
              <div
                className="jth-about-experience-list jth-animation"
                data-animationtype="opacityUp"
              >
                <IconLaptopCode />
                <h3>{t('About.webDevelopment')}</h3>
                <p>{t('About.webDevelopmentDetail')}</p>
              </div>
              <div
                className="jth-about-experience-list jth-animation"
                data-animationtype="opacityUp"
              >
                <IconObjectGroup />
                <h3>{t('About.uiuxDesign')}</h3>
                <p>{t('About.uiuxDesignDetail')}</p>
              </div>
              <div
                className="jth-about-experience-list jth-animation"
                data-animationtype="opacityUp"
              >
                <IconCommentDots />
                <h3>{t('About.communication')}</h3>
                <p>{t('About.communicationDetail')}</p>
              </div>
              <div
                className="jth-about-experience-list jth-animation"
                data-animationtype="opacityUp"
              >
                <IconUserTie />
                <h3>{t('About.entrepreneurship')}</h3>
                <p>{t('About.entrepreneurshipDetail')}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="jth-section">
          <div
            className="jth-container jth-section-getInTouch jth-animation"
            data-animationtype="opacityUp"
          >
            <h3>{t('Footer.contactMessage')}</h3>
            <p>{t('Footer.contactSubMessage')}</p>
            <Button
              buttonType="a"
              href="mailto:jthcast@gmail.com"
              lineType="reverseBackground"
            >
              {t('Footer.contactButtonMessage')}
            </Button>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default About;

// export const pageQuery = graphql`
//   query {
//     file(relativePath: {eq: "resources/images/myPhoto.jpg"}) {
//       id
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;