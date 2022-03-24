import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react with James Hush link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react with James Hush/i);
  expect(linkElement).toBeInTheDocument();
});
