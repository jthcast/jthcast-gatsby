import React from 'react';
import { render, screen } from '@testing-library/react';
import Card, { CardInterface } from '.';

it('renders Card with className', () => {
  const mockState: CardInterface = {
    seq: '1',
    title: 'title',
    tags: ['tag1', 'tag2'],
    content: 'content',
    date: '2020-12-01',
    image: '../testImage.svg',
  };
  render(<Card item={mockState} className="testClass" />);
  const card = screen.getByText('title').parentElement;
  expect(card?.classList.contains('testClass')).toBe(true);
  if (mockState.tags) {
    const tags = screen.getByText(mockState.tags.join(' / '));
    expect(tags).toBeInTheDocument();
  }
  if (mockState.date) {
    const date = screen.getByText(mockState.date);
    expect(date).toBeInTheDocument();
  }
});
