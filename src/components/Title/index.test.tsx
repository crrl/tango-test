// import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './index';

test('verify that the title is setting up ok.', () => {
  render(<Title text='Caulculate Fibonacci' />);
  const ResultElement = screen.getByRole('title');
  expect(ResultElement.textContent).toBe('Caulculate Fibonacci');
});
