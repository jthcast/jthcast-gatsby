import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '.';

it('renders Footer with className', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  Object.defineProperty(root, 'scrollY', { value: 1000 });
  const scrollToSpy = jest.fn();
  root.scrollTo = scrollToSpy;

  render(<Footer className="test" />);

  const scrollTopButton = screen.getByRole('button');
  fireEvent.click(scrollTopButton);
  expect(scrollToSpy).toHaveBeenCalled();
});
