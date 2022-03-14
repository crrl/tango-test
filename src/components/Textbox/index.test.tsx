// import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Textbox from './index';

let currentValue: number = 0;

const handleValueChange = (value: number) => {
  currentValue = value;
};

beforeEach(() => {
  currentValue = 0;
})

describe('successful tests for Textbox component.', () => {
  test('verify that the value is well received.', () => {
    currentValue = 4;
    render(<Textbox value={currentValue} setValue={() => { }} />);
    const ResultElement = screen.getByRole('value') as HTMLInputElement;
    expect(ResultElement.value).toBe(String(currentValue));
  });

  test('verify that function is changing value.', () => {
    render(<Textbox value={currentValue} setValue={handleValueChange} />);
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 3 } })
    expect(currentValue).toBe(3);
  });
})

describe('failure tests for Textbox component.', () => {
  test('verify that the value is over the highest limit and throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Textbox value={currentValue} setValue={handleValueChange} />);
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 51 } });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test('verify that the value is under the lowest limit and throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Textbox value={currentValue} setValue={handleValueChange} />);
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: -1 } });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test('verify that the value is in the limit and doesn\'t throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Textbox value={currentValue} setValue={handleValueChange} />);
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 0 } });
    expect(alertMock).toHaveBeenCalledTimes(0);
  });
})