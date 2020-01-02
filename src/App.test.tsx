import React from 'react';
import { render } from '@testing-library/react';
import Demo from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Demo />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
