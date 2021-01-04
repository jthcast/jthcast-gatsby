import React, { useEffect } from 'react';
import '../../../locales/i18n';
import Header from '../../organisms/Header';
import { useTranslation } from 'react-i18next';
import MenuList from '../../organisms/MenuList';
import Footer from '../../organisms/Footer';
import unFocus from '../../../customHooks/unFocus';
import SEO from '../Seo';
import useAnimation from '../../../customHooks/useAnimation';
import { MDXProvider } from '@mdx-js/react';

type layoutProps = {
  title: string,
  description?: string,
  children?: any
  image?: string
}

const ExternalLink = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className="jth-external-link" {...props}>
      {children}
    </a>
  )
}

const Video = ({ children, ...props }) => {
  return (
    <figure>
      <video
        preload="auto"
        muted
        loop
        playsInline
        autoPlay
        controls
        {...props}
      />
      <figcaption>
        {children}
      </figcaption>
    </figure>
  )
}

const Layout = ({ title, description = '', children, image }: layoutProps) => {
  const { t } = useTranslation();
  const shortcodes = { ExternalLink, Video };

  useAnimation();
  useEffect(() => {
    document.documentElement.removeAttribute('style');
    unFocus();
  }, []);
  return (
    <div className="global-wrapper">
      <SEO title={title} description={description} image={image} />
      <Header ghost showType="top" title={t('Common.title')} />
      <MenuList />
      <MDXProvider components={shortcodes}>
        <main>{children}</main>
      </MDXProvider>
      <Footer />
    </div>
  );
};

export default Layout;
