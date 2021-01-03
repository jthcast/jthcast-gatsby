import React, { useEffect } from 'react';
import '../../../locales/i18n';
import Header from '../../organisms/Header';
import { useTranslation } from 'react-i18next';
import MenuList from '../../organisms/MenuList';
import Footer from '../../organisms/Footer';
import unFocus from '../../../customHooks/unFocus';
import SEO from '../Seo';
import useAnimation from '../../../customHooks/useAnimation';

type layoutProps = {
  title: string,
  description?: string,
  children?: any
}

const Layout = ({ title, description = '', children }: layoutProps) => {
  const { t } = useTranslation();

  useAnimation();
  useEffect(() => {
    document.documentElement.removeAttribute('style');
    unFocus();
  }, []);
  return (
    <div className="global-wrapper">
      <SEO title={title} description={description} />
      <Header ghost showType="top" title={t('Common.title')} />
      <MenuList />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
