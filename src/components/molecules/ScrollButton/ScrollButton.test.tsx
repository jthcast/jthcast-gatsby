import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ScrollButton from '.';

it('renders ScrollButton', () => {
  render(<ScrollButton />);
});

it('scroll down and up', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  Object.defineProperty(root, 'scrollY', { value: 1000 });
  render(<ScrollButton />);
  fireEvent.scroll(root, { value: 0 });
});

it('renders ScrollButton with showType notTopAndUp state', () => {
  render(<ScrollButton showType="notTopAndUp" />);
});

it('scroll down and up with showType notTopAndUp state', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  Object.defineProperty(root, 'scrollY', { value: 1000 });
  render(<ScrollButton showType="notTopAndUp" />);
  fireEvent.scroll(root, { value: 0 });
});

it('renders ScrollButton with showType up state', () => {
  render(<ScrollButton showType="notTopAndUp" />);
});

it('scroll down and up with showType up state', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  Object.defineProperty(root, 'scrollY', { value: 1000 });
  render(<ScrollButton showType="up" />);
  fireEvent.scroll(root, { value: 0 });
});
