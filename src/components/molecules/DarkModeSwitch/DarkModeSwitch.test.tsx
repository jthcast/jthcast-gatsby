import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import DarkModeSwitch from '.';

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

it('renders DarkModeSwitch', () => {
  render(
    <RecoilRoot>
      <DarkModeSwitch />
    </RecoilRoot>
  );
  const switchButton = screen.getByRole('switch');
  fireEvent.click(switchButton);
});
