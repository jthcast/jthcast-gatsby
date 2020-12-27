import React from 'react';
import { render } from '@testing-library/react';
import PrismCode from '.';

it('renders PrismCode with code and language and plugins states', () => {
  const mockCode = `const test = "test";`;
  render(<PrismCode code={mockCode} language="tsx" plugins={['numbers']} />);
});
