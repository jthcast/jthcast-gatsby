import React, { useCallback, useContext } from 'react';
import './LanguageSwitch.scss';
import Switch from '../../atoms/Switch';
import { LanguageContext } from '../../../context/LanguageContext';

const LanguageSwitch = (): React.ReactElement => {
  const [language, setLanguage] = useContext(LanguageContext);

  const languageHandling = useCallback(() => {
    const isEnglish = language === 'en';
    if (isEnglish) {
      setLanguage('ko');
    } else {
      setLanguage('en');
    }
  }, [language, setLanguage]);

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
