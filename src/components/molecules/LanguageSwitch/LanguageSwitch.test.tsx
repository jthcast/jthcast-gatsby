import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../../locales/i18n';
import LanguageSwitch from '.';
import { LanguageProvider } from '../../../context/LanguageContext';

let languageGetter: jest.SpyInstance<string, []>;

beforeEach(() => {
  languageGetter = jest.spyOn(window.navigator, 'language', 'get');
});

it('renders LanguageSwitch', () => {
  if (languageGetter) {
    languageGetter.mockReturnValue('en');
  }
  render(
    <LanguageProvider>
      <LanguageSwitch />
    </LanguageProvider>
  );
  const switchButton = screen.getByRole('switch');
  fireEvent.click(switchButton);
});
