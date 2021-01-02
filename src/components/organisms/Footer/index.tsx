import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import ScrollButton from '../../molecules/ScrollButton';
import {
  IconArrowToTop,
  IconEnvelope,
  IconGithub,
  IconLinkedIn,
  IconLogoColored,
  IconTemplate,
} from '../../atoms/Icons';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps): React.ReactElement => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className={`jth-footer jth-container${className ? ` ${className}` : ``}`}
    >
      <nav className="jth-footer-container">
        <ul className="jth-footer-items-left">
          <li>© {new Date().getFullYear()} {t('Footer.copyright')}</li>
          <li>
            <IconLogoColored className="jth-footer-logo" />
          </li>
          {/* <li> */}
          {/* <Link aria-label={`Terms of use`} to="/"> */}
          {/* <span>Terms of use</span> */}
          {/* </Link> */}
          {/* </li> */}
          {/* <li> */}
          {/* <Link aria-label={`Privacy notice`} to="/404/"> */}
          {/* <span>Privacy notice</span> */}
          {/* </Link> */}
          {/* </li> */}
        </ul>
        {/* <ul className="jth-footer-items-center">
          <li>
            <span>Center</span>
          </li>
        </ul> */}
        <ul className="jth-footer-items-right">
          <li className="jth-footer-items-icon">
            <a href="mailto:jthcast@gmail.com" aria-label="mail">
              <IconEnvelope />
            </a>
          </li>
          <li className="jth-footer-items-icon">
            <a
              href="https://github.com/jthcast"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <IconGithub />
            </a>
          </li>
          <li className="jth-footer-items-icon">
            <a
              href="https://linkedin.com/in/jthcast"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedIn"
            >
              <IconLinkedIn />
            </a>
          </li>
          <li className="jth-footer-items-icon">
            <a href="/rss.xml"
              target="_blank"
              rel="noreferrer"
              aria-label="rss"
            >
              <IconTemplate iconName="IconRss" />
            </a>
          </li>
        </ul>
      </nav>
      <ScrollButton
        ariaLabel="ScrollTop"
        tabIndex={-1}
        onClick={scrollToTop}
        showType="notTopAndUp"
        className="jth-footer-scrollButton-top"
      >
        <IconArrowToTop />
      </ScrollButton>
    </footer>
  );
};

export default Footer;
