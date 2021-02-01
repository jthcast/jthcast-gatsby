import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HeaderMessage from '.';
import { HeaderMessageProvider } from '../../../context/HeaderMessageContext';

it('renders HeaderMessage with className', () => {
  render(
    <HeaderMessageProvider>
      <HeaderMessage className="test">
        <p>test</p>
      </HeaderMessage>
    </HeaderMessageProvider>
  );
});

it('when it click, HeaderMessage will disappear', () => {
  render(
    <HeaderMessageProvider>
      <HeaderMessage>
        <p>test</p>
      </HeaderMessage>
    </HeaderMessageProvider>
  );
  const closeButton = screen.getByRole('button');
  fireEvent.click(closeButton);
  expect(closeButton).not.toBeInTheDocument();
});
