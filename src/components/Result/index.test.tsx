// import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './index';

test('prints the right result in screen', () => {
  render(<Result result={0} />);
  const ResultElement = screen.getByRole('result');
  expect(ResultElement.textContent).toBe('0');
});

test('prints the wrong result in screen', () => {
  render(<Result result={3} />);
  const ResultElement = screen.getByRole('result');
  expect(ResultElement.textContent).not.toBe('0');
});
