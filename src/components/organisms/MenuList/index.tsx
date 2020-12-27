import React, { useCallback, useEffect, useState } from 'react';
import './MenuList.scss';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../../molecules/DarkModeSwitch';
import { IconBars, IconTimes } from '../../atoms/Icons';
import ScrollButton from '../../molecules/ScrollButton';
import LanguageSwitch from '../../molecules/LanguageSwitch';
import { Link } from 'gatsby';

interface MenuListProps {
  className?: string;
  showStartPosition?: 'bottom' | 'left' | 'none' | 'right' | 'top';
}

const MenuList = ({
  className,
  showStartPosition = 'none',
}: MenuListProps): JSX.Element => {
  let firstTabEl = undefined;
  let lastTabEl = undefined;
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    firstTabEl = document.querySelectorAll(
      '.jth-menuList-items li a'
    )[0] as HTMLAnchorElement;
    lastTabEl = document.querySelector(
      '.jth-scrollButton-menuList-menu'
    ) as HTMLLIElement;
  }
  const { t } = useTranslation();
  const [menuState, setMenuState] = useState(false);


  const menuListHandling = () => {
    setMenuState(!menuState);
  };

  const keyDownHandling = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape' && menuState) {
        setMenuState(false);
      }
      if (
        event.code === 'Tab' &&
        event.target === lastTabEl &&
        !event.shiftKey
      ) {
        event.preventDefault();
        firstTabEl.focus();
      }
      if (
        event.code === 'Tab' &&
        event.target === firstTabEl &&
        event.shiftKey
      ) {
        event.preventDefault();
        lastTabEl.focus();
      }
    },
    [menuState, firstTabEl, lastTabEl]
  );

  useEffect(() => {
    if (menuState) {
      document.body.classList.add('jth-menuList-show');
      firstTabEl.focus();
    } else {
      document.body.classList.remove('jth-menuList-show');
    }
  }, [menuState, firstTabEl]);

  useEffect(() => {
    window.addEventListener('keydown', (event) => keyDownHandling(event));

    return () => {
      window.removeEventListener('keydown', (event) => keyDownHandling(event));
    };
  }, [keyDownHandling]);

  return (
    <>
      <nav
        className={`jth-menuList${showStartPosition ? ` jth-menuList-${showStartPosition}` : ``
          }${className ? ` ${className}` : ``}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="jth-menuList-items">
          <ul className="jth-menuList-links">
            <li>
              <Link onClick={menuListHandling} to="/">
                {t('Header.home')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/about/">
                {t('Header.about')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/posts/">
                {t('Header.posts')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/codes/">
                {t('Header.codes')}
              </Link>
            </li>
            <li>
              <Link onClick={menuListHandling} to="/portfolio/">
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
        </div>
        <div
          role="presentation"
          onClick={menuListHandling}
          className="jth-menuList-backdrop"
        />
      </nav>
      <ScrollButton
        ariaLabel="menuButton"
        onClick={menuListHandling}
        showType="up"
        className="jth-scrollButton-menuList-menu"
      >
        {menuState ? <IconTimes /> : <IconBars />}
      </ScrollButton>
    </>
  );
};

export default MenuList;
