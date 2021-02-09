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
  IconAWS,
  IconCSS3,
  IconFigma,
  IconGatsby,
  IconGraphql,
  IconHtml5,
  IconJavascript,
  IconNextjs,
  IconNodejs,
  IconReact,
  IconSass,
  IconTypescript
} from '../../components/atoms/Icons';
import Button from '../../components/atoms/Button';
import Layout from '../../components/atoms/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { FluidObject } from "gatsby-image";

type aboutQueryProps = {
  file: {
    id: string,
    childImageSharp: {
      fluid: FluidObject
    }
  },
  allFile: {
    nodes: [{
      publicURL: string
    }]
  }
}

const About = (): React.ReactElement => {
  const { t } = useTranslation();
  const query: aboutQueryProps = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "myPhoto.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 360, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
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
              <h1>
                <span>{t('About.sayHi')}</span>
                <span className="jth-emoji jth-animation-wave" role="img" aria-label="waving-hand">👋</span>
                <span>{t('About.aboutMessage')}</span>
              </h1>
              <p>{t('About.introduceMyself')}</p>
              <p>{t('About.aboutSubMessage')}</p>
              <div className="jth-about-contact">
                <a href="mailto:jthcast@gmail.com" aria-label="mail">
                  <IconEnvelope />
                </a>
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
              </div>
            </div>
            <div className="jth-about-photo jth-animation" data-animationtype="opacityUp">
              <GatsbyImage fluid={query.file.childImageSharp.fluid} alt="My photo" />
            </div>
          </div>
        </section>
        <section className="jth-section jth-about-manifesto">
          <div className="jth-container jth-section-twoColGrid jth-about-manifesto-grid">
            <ul className="jth-about-skills">
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconJavascript style={{ color: '#000000' }} />
                  <p>Javascript</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconTypescript />
                  <p>Typescript</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconReact />
                  <p>React</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconNextjs />
                  <p>Next JS</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconGatsby />
                  <p>Gatsby</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconGraphql />
                  <p>GraphQL</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconHtml5 />
                  <p>HTML5</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconCSS3 />
                  <p>CSS3</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconSass />
                  <p>SASS</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconNodejs />
                  <p>Node JS</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconAWS />
                  <p>AWS</p>
                </div>
              </li>
              <li className="jth-animation" data-animationtype="opacityUp">
                <div className="jth-about-skills-grid">
                  <IconFigma />
                  <p>Figma</p>
                </div>
              </li>
            </ul>
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
        {/* <section className="jth-section">
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
        </section> */}
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