import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

it('renders Button with block state', () => {
  render(
    <Button block>
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-block')).toBe(true);
});

it('renders Button with lineType state', () => {
  render(
    <Button lineType="dashed">
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-line-dashed')).toBe(true);
});

it('renders Button with ghost state', () => {
  render(
    <Button ghost>
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-ghost')).toBe(true);
});

it('renders Button with danger state', () => {
  render(
    <Button danger>
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-danger')).toBe(true);
});

it('renders Button with shape state', () => {
  render(
    <Button shape="circle">
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-circle')).toBe(true);
});

it('renders Button with disabled state', () => {
  render(
    <Button disabled>
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('jth-button-disabled')).toBe(true);
  expect(button).toBeDisabled();
});

it('renders Button with loading state', () => {
  render(
    <Button loading>
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  const loadingIcon = screen.getByText('button').closest('svg');
  expect(button.classList.contains('jth-button-disabled')).toBe(true);
  expect(button).toBeDisabled();
  if (loadingIcon) {
    expect(loadingIcon.classList.contains('loading')).toBe(true);
  }
});

it('renders Button with className', () => {
  render(
    <Button className="test">
      <p>button</p>
    </Button>
  );
  const button = screen.getByRole('button');
  expect(button.classList.contains('test')).toBe(true);
});

it('renders Button with buttonType state', () => {
  render(
    <Button buttonType="a">
      <p>button</p>
    </Button>
  );
  const button = screen.queryByRole('button');
  const anchor = screen.getByText('button').closest('a');
  expect(button).toBeNull();
  expect(anchor).not.toBeNull();
});

it('renders Button with buttonType and block states', () => {
  render(
    <Button buttonType="a" block>
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('jth-button-block')).toBe(true);
  }
});

it('renders Button with buttonType and lineType states', () => {
  render(
    <Button buttonType="a" lineType="dashed">
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('jth-button-line-dashed')).toBe(true);
  }
});

it('renders Button with buttonType and ghost states', () => {
  render(
    <Button buttonType="a" ghost>
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('jth-button-ghost')).toBe(true);
  }
});

it('renders Button with buttonType and danger states', () => {
  render(
    <Button buttonType="a" danger>
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('jth-button-danger')).toBe(true);
  }
});

it('renders Button with buttonType and shape states', () => {
  render(
    <Button buttonType="a" shape="circle">
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('jth-button-circle')).toBe(true);
  }
});

it('renders Button with buttonType and className', () => {
  render(
    <Button buttonType="a" className="test">
      <p>button</p>
    </Button>
  );
  const anchor = screen.getByText('button').closest('a');
  if (anchor) {
    expect(anchor.classList.contains('test')).toBe(true);
  }
});
