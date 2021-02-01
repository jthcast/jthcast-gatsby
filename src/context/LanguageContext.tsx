import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, rawSetLanguage] = useState(undefined);

  function getInitialLanguageMode() {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const persistedLanguagePreference = window.localStorage.getItem(
        'language-mode'
      );

      if (persistedLanguagePreference) {
        return persistedLanguagePreference;
      }

      const systemLanguage = window.navigator.language;
      const languageString = systemLanguage.substr(0, 2);
      return languageString;
    }
  }

  useEffect(() => {
    const language = getInitialLanguageMode();
    rawSetLanguage(language);
  }, []);

  const setLanguage = (newValue: string) => {
    rawSetLanguage(newValue);
    i18n.changeLanguage(newValue);
    localStorage.setItem('language-mode', newValue);
  };

  useEffect(() => {
    window.addEventListener('languagechange', getInitialLanguageMode);

    return () => {
      window.addEventListener('languagechange', getInitialLanguageMode);
    };
  }, []);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};