import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import '../../../locales/i18n';
import Header from '.';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
