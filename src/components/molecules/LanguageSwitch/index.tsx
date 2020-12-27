import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitch.scss';
import { useRecoilState } from 'recoil';
import Switch from '../../atoms/Switch';
import { initialLanguageMode } from '../../../recoilStates';

const LanguageSwitch = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useRecoilState(initialLanguageMode);

  const languageHandling = useCallback(() => {
    const isEnglish = language === 'en';
    if (isEnglish) {
      setLanguage('ko');
    } else {
      setLanguage('en');
    }
  }, [language, setLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
    window.localStorage.setItem('language-mode', language);
  }, [language, i18n]);

  useEffect(() => {
    window.addEventListener('languagechange', languageHandling);

    return () => {
      window.addEventListener('languagechange', languageHandling);
    };
  }, [languageHandling]);

  return (
    <Switch
      className="switch-language"
      checked={language === 'en'}
      unCheckedChildren="KO"
      checkedChildren="EN"
      onClick={languageHandling}
    />
  );
};

export default LanguageSwitch;
