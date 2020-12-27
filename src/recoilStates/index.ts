import { atom } from 'recoil';

function getInitialColorMode() {
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const persistedColorPreference = window.localStorage.getItem('color-mode');

    if (persistedColorPreference) {
      return persistedColorPreference;
    }

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
    if (systemPreference.matches) {
      return 'dark';
    }
    return 'light';
  }
}

const initialColorMode = atom({
  key: 'initialColorMode',
  default: getInitialColorMode(),
});

const headerMessageState = atom({
  key: 'headerMessageState',
  default: true,
});

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
    return systemLanguage.substr(0, 2);
  }
}

const initialLanguageMode = atom({
  key: 'initialLanguageMode',
  default: getInitialLanguageMode(),
});

export { initialColorMode, headerMessageState, initialLanguageMode };
