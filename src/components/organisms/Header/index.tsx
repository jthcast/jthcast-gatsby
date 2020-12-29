import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderMessage from '../../atoms/HeaderMessage';
import { Link } from 'gatsby';
import { IconLogoColored } from '../../atoms/Icons';
import LanguageSwitch from '../../molecules/LanguageSwitch';
import DarkModeSwitch from '../../molecules/DarkModeSwitch';
import './Header.scss';

interface HeaderProps {
  className?: string;
  ghost?: boolean;
  showType?: 'fixed' | 'top' | 'sticky' | 'up';
  subTitle?: string;
  title?: string;
}

const Header = ({
  className,
  ghost = false,
  showType = 'top',
  subTitle,
  title,
}: HeaderProps): React.ReactElement => {
  const { t } = useTranslation();
  const [scrollState, setScrollState] = useState(false);
  const prevScrollRef = useRef(0);
  const showTypeRef = useRef(showType);
  const hideRef = useRef(false);

  const scrollHandling = useCallback(() => {
    const scrollValue = window.scrollY;

    if (showTypeRef.current === 'up') {
      hideRef.current = true;
    }
    if (prevScrollRef.current >= scrollValue) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
    prevScrollRef.current = scrollValue;
  }, []);

  useEffect(() => {
    scrollHandling();
    window.addEventListener('scroll', scrollHandling);

    return () => {
      window.removeEventListener('scroll', scrollHandling);
    };
  }, [scrollHandling]);

  return (
    <>
      <HeaderMessage allowClose>
        <Link to="/about/">{t('Header.headerMessage')}</Link>
      </HeaderMessage>
      <header
        className={`jth-header-container${showTypeRef.current === 'sticky' ? ' jth-header-sticky' : ``
          }${showTypeRef.current === 'fixed' ? ' jth-header-fixed' : ``}${hideRef.current ? ' jth-header-hide' : ``
          }${scrollState ? ` jth-header-show` : ``}${ghost ? ' jth-header-ghost' : ``
          }${className ? ` ${className}` : ``}`}
      >
        {/* <div className="jth-header-mobile">
          <Link to="/" aria-label="home">
            <IconLogo />
          </Link>
        </div> */}
        <nav className="jth-header-items">
          {title || subTitle ? (
            <ul className="jth-header-items-left">
              <li>
                <Link aria-label="home" to="/">
                  <span className="jth-header-title">
                    <IconLogoColored />
                    {title}
                  </span>
                  <span className="jth-header-subTitle">{subTitle}</span>
                </Link>
              </li>
            </ul>
          ) : null}
          {/* {title ||
            (subTitle && (
              <ul className="jth-header-items-center">
                <li>
                  <Link aria-label="home" tabIndex={-1} to="/">
                    <span className="jth-header-title">{title}</span>
                    <span className="jth-header-subTitle">{subTitle}</span>
                  </Link>
                </li>
              </ul>
            ))} */}
          <ul className="jth-header-items-right">
            <li>
              <Link to="/about/" activeClassName="jth-header-avtive" partiallyActive>
                {t('Header.about')}
              </Link>
            </li>
            <li>
              <Link to="/posts/" activeClassName="jth-header-avtive" partiallyActive>
                {t('Header.posts')}
              </Link>
            </li>
            <li>
              <Link to="/codes/" activeClassName="jth-header-avtive" partiallyActive>
                {t('Header.codes')}
              </Link>
            </li>
            <li>
              <Link to="/portfolios/" activeClassName="jth-header-avtive" partiallyActive>
                {t('Header.portfolios')}
              </Link>
            </li>
            <li>
              <LanguageSwitch />
            </li>
            <li>
              <DarkModeSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
