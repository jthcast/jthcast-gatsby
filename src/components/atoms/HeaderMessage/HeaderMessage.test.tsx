import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import HeaderMessage from '.';

it('renders HeaderMessage with className', () => {
  render(
    <RecoilRoot>
      <HeaderMessage className="test">
        <p>test</p>
      </HeaderMessage>
    </RecoilRoot>
  );
});

it('when it click, HeaderMessage will disappear', () => {
  render(
    <RecoilRoot>
      <HeaderMessage>
        <p>test</p>
      </HeaderMessage>
    </RecoilRoot>
  );
  const closeButton = screen.getByRole('button');
  fireEvent.click(closeButton);
  expect(closeButton).not.toBeInTheDocument();
});
