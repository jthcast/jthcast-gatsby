import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import '../../../locales/i18n';
import LanguageSwitch from '.';

let languageGetter: jest.SpyInstance<string, []>;

beforeEach(() => {
  languageGetter = jest.spyOn(window.navigator, 'language', 'get');
});

it('renders LanguageSwitch', () => {
  if (languageGetter) {
    languageGetter.mockReturnValue('en');
  }
  render(
    <RecoilRoot>
      <LanguageSwitch />
    </RecoilRoot>
  );
  const switchButton = screen.getByRole('switch');
  fireEvent.click(switchButton);
});
