import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

const isClient = typeof window !== 'undefined';
let systemLanguage = undefined;
let preferedLanguage = undefined;
if (isClient) {
  systemLanguage = window.navigator.language;
  preferedLanguage = localStorage.getItem('language');
}

i18n.use(initReactI18next).init({
  resources,
  lng: preferedLanguage || systemLanguage || 'en',
  fallbackLng: 'en',
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export const languages = Object.keys(resources);

export default i18n;
