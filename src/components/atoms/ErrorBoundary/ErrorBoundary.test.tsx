import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '.';

it('renders ErrorBoundary Fallback if error', () => {
  const ThrowError = () => {
    throw new Error('Error');
  };
  render(
    <Router>
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    </Router>
  );
});
