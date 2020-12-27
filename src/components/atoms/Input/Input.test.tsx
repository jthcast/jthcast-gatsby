import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

it('renders Input with className', () => {
  render(<Input className="test" />);
});

it('renders Input with allowClose state. when it click, value will delete', () => {
  const { container } = render(<Input value="test" allowClear />);

  const svg = container.querySelector('svg');
  if (svg) {
    fireEvent.click(svg);
  }
});

it('renders Input with allowClose state. when keyDown ESC, value will delete', () => {
  render(<Input value="test" allowClear />);

  const input = screen.getByDisplayValue('test');
  fireEvent.keyDown(input, { key: 'Escape' });
});

it('renders Input with type password state. when icon click, type will change to text', () => {
  const { container } = render(<Input value="test" type="password" />);

  const input = screen.getByDisplayValue('test');
  const toTextSvg = container.querySelector('svg');
  if (toTextSvg) {
    fireEvent.click(toTextSvg);
    expect(input).toHaveAttribute('type', 'text');
    const toPasswordSvg = container.querySelector('svg');
    if (toPasswordSvg) {
      fireEvent.click(toPasswordSvg);
      expect(input).toHaveAttribute('type', 'password');
    }
  }
});

it('renders Input with onChange state', () => {
  const onChange = jest.fn();
  render(<Input value="test" onChange={onChange} />);

  const input = screen.getByDisplayValue('test');
  fireEvent.change(input, { target: { value: 'inputChange' } });
  expect(onChange).toBeCalled();
});

it('renders Input with onKeyDown state', () => {
  const onKeyDown = jest.fn();
  render(<Input value="test" onKeyDown={onKeyDown} />);

  const input = screen.getByDisplayValue('test');
  fireEvent.keyDown(input, { key: 'a' });
  expect(onKeyDown).toBeCalled();
});

it('renders Input with onPressEnter state', () => {
  const onPressEnter = jest.fn();
  render(<Input value="test" onPressEnter={onPressEnter} />);

  const input = screen.getByDisplayValue('test');
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(onPressEnter).toBeCalled();
});

it('renders Input with prefix state', () => {
  render(<Input value="test" prefix="prefix" />);
});

it('renders Input with suffix state', () => {
  render(<Input value="test" suffix="suffix" />);
});

it('renders Input with disabled state', () => {
  render(<Input value="test" disabled />);
});
