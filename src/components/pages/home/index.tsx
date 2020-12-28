import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.scss';
// import { ReactComponent as Solve } from '../../../resources/images/solve.svg';
// import { ReactComponent as Communication } from '../../../resources/images/communication.svg';
// import { ReactComponent as LoveToUse } from '../../../resources/images/loveToUse.svg';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
// import { recentPosts } from '../../../data/PostsData';
// import Meta from '../../components/atoms/Meta';
import useAnimation from '../../../customHooks/useAnimation';
import { Link } from 'gatsby';

const Home = (): React.ReactElement => {
  const { t } = useTranslation();
  useAnimation();
  return (
    <>
      {/* <Meta title={t('Home.title')} description={t('Common.description')} /> */}
      <section className="jth-home">
        <section className="jth-section">
          <div
            className="jth-container jth-home-title jth-animation"
            data-animationtype="opacityUp"
          >
            <h1>{t('Home.greetMessage')}</h1>
            <p>{t('Home.greetSubMessage')}</p>
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container jth-section-twoColGrid-center">
            {/* <Solve className="jth-animation" data-animationtype="opacityUp" /> */}
            <div
              className="jth-section-rowGrid jth-animation"
              data-animationtype="opacityUp"
            >
              <h2>{t('About.manifesto1')}</h2>
              <p>{t('About.manifesto1Detail')}</p>
            </div>
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container jth-section-twoColGrid-center">
            <div
              className="jth-section-rowGrid jth-section-mobileOrder-2 jth-animation"
              data-animationtype="opacityUp"
            >
              <h2>{t('About.manifesto2')}</h2>
              <p>{t('About.manifesto2Detail')}</p>
            </div>
            {/* <Communication
              className="jth-animation"
              data-animationtype="opacityUp"
            /> */}
          </div>
        </section>
        <section className="jth-section">
          <div className="jth-container jth-section-twoColGrid-center">
            {/* <LoveToUse
              className="jth-animation"
              data-animationtype="opacityUp"
            /> */}
            <div
              className="jth-section-rowGrid jth-animation"
              data-animationtype="opacityUp"
            >
              <h2>{t('About.manifesto3')}</h2>
              <p>{t('About.manifesto3Detail')}</p>
            </div>
          </div>
        </section>
        {/* {recentPosts.length !== 0 && (
          <section className="jth-section">
            <div
              className="jth-container jth-section-rowGrid-center jth-animation"
              data-animationtype="opacityUp"
            >
              <h2>{t('Home.recentPosts')}</h2>
              <Link to="/posts/" className="jth-router-link">
                {t('Home.postPage')}
              </Link>
            </div>
            <ul className="jth-container jth-home-posts">
              {recentPosts.map((post) => {
                return (
                  <li
                    key={post.seq}
                    className="jth-animation"
                    data-animationtype="opacityUp"
                  >
                    <Link to={`/posts/${post.seq}`} aria-label={post.title}>
                      <Card item={post} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )} */}
        <section className="jth-section">
          <div
            className="jth-container jth-section-rowGrid jth-section-maxWidth-70 jth-animation"
            data-animationtype="opacityUp"
          >
            <h3>{t('About.aboutMessage')}</h3>
            <p>{t('About.aboutSubMessage')}</p>
            <Link to="/about/" className="jth-router-link">
              {t('Home.aboutPage')}
            </Link>
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
    </>
  );
};

export default Home;
