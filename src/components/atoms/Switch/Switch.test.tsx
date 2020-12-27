import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Switch from '.';

it('renders Switch with className and checkedChildren and unCheckedChildren', () => {
  render(
    <Switch
      className="test"
      checkedChildren="checked"
      unCheckedChildren="unChecked"
    />
  );
});

it('renders Switch with className and checkedChildren and unCheckedChildren and checked', () => {
  render(
    <Switch
      className="test"
      checkedChildren="checked"
      unCheckedChildren="unChecked"
      checked
    />
  );
});

it('renders Switch with loading state', () => {
  render(<Switch loading />);

  const switchButton = screen.getByRole('switch');
  expect(switchButton).toBeDisabled();
});

it('renders Switch with disabled state', () => {
  render(<Switch disabled />);

  const switchButton = screen.getByRole('switch');
  expect(switchButton).toBeDisabled();
});

it('renders Switch with onClick state', () => {
  const onClick = jest.fn();
  render(<Switch onClick={onClick} />);

  const switchButton = screen.getByRole('switch');
  fireEvent.click(switchButton);
});

it('renders Switch with onChange state', () => {
  const onChange = jest.fn();
  render(<Switch onChange={onChange} />);

  const switchButton = screen.getByRole('switch');
  fireEvent.click(switchButton);
});
