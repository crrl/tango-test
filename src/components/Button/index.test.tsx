// import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';
const handleClick = jest.fn();
let buttonElement: any = null;
beforeEach(() => {
  render(<Button text={'Calculate'} onClick={handleClick} />);
  buttonElement = screen.getByRole('calculate');
});

test('renders button that says "Calculate"', () => {
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.textContent).toBe('Calculate');
});

test('executes the function passed to the Button.', () => {
  render(<Button text={'Calculate'} onClick={handleClick} />);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
