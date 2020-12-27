import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from '.';

it('renders Accordion with className', () => {
  render(
    <Accordion title="title" className="test">
      <p>content</p>
    </Accordion>
  );
  const title = screen.getByRole('button');
  expect(title.classList.contains('test')).toBe(true);
});

it('when title clicked, content will get height', () => {
  render(
    <Accordion title="title">
      <p>content</p>
    </Accordion>
  );
  const title = screen.getByRole('button');
  const content = screen.getByText('content').parentElement?.parentElement;
  expect(content).toHaveStyle('height: 0px;');
  fireEvent.click(title);
  if (content) {
    fireEvent.transitionEnd(content);
    expect(content).not.toHaveStyle('height: 0px;');
  }
});

it('when title click twice, content will lost height', (done) => {
  render(
    <Accordion title="title">
      <p>content</p>
    </Accordion>
  );
  const title = screen.getByRole('button');
  const content = screen.getByText('content').parentElement?.parentElement;
  expect(content).toHaveStyle('height: 0px;');
  fireEvent.click(title);
  fireEvent.click(title);
  if (content) {
    setTimeout(() => {
      done();
      fireEvent.transitionEnd(content);
      expect(content).toHaveStyle('height: 0px;');
    }, 0);
  } else {
    expect(content).toBeNull();
  }
});
