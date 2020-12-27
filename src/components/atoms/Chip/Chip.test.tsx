import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Chip from '.';

it('renders Chip with className and allowClose state', () => {
  render(
    <Chip className="testClass">
      <p>test</p>
    </Chip>
  );
  const chip = screen.getByText('test').parentElement;
  const closeButton = screen.getByRole('button');
  expect(chip?.classList.contains('testClass')).toBe(true);
  expect(closeButton?.classList.contains('jth-chip-close')).toBe(true);
});

it('renders Chip with ghost state', () => {
  render(
    <Chip ghost>
      <p>test</p>
    </Chip>
  );
  const chip = screen.getByText('test').parentElement;
  expect(chip?.classList.contains('jth-chip-ghost')).toBe(true);
});

it('when close button click, it will disappear with onClose function', () => {
  const onClose = jest.fn();
  render(
    <Chip onClose={onClose}>
      <p>test</p>
    </Chip>
  );
  const closeButton = screen.getByRole('button');
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});

it('when close button click, it will disappear without onClose function', () => {
  const onClose = jest.fn();
  render(
    <Chip>
      <p>test</p>
    </Chip>
  );
  const closeButton = screen.getByRole('button');
  fireEvent.click(closeButton);
  expect(onClose).not.toHaveBeenCalled();
});
