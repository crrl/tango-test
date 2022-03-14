// import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { customRender, defaultProps } from '../constants/index';
import Textbox from '../../components/Textbox/index';

let currentValue: number = 0;

const handleValueChange = (value: number) => {
  currentValue = value;
};


beforeEach(() => {
  currentValue = 0;
})


describe('successful tests for Textbox component.', () => {
  test('verify that the value is well received.', () => {
    const providerProps = {
      value: 4,
      result: 0
    }

    currentValue = 4;
    customRender(<Textbox setValue={() => { }} />, { providerProps });
    const ResultElement = screen.getByRole('value') as HTMLInputElement;
    expect(ResultElement.value).toBe(String(currentValue));
  });

  test('verify that function is changing value.', () => {
    customRender(<Textbox setValue={handleValueChange} />, { defaultProps });
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 3 } })
    expect(currentValue).toBe(3);
  });
})

describe('failure tests for Textbox component.', () => {
  test('verify that the value is over the highest limit and throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    customRender(<Textbox setValue={handleValueChange} />, { defaultProps });
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 51 } });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test('verify that the value is under the lowest limit and throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    customRender(<Textbox setValue={handleValueChange} />, { defaultProps });
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: -1 } });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test('verify that the value is in the limit and doesn\'t throws an error.', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    customRender(<Textbox setValue={handleValueChange} />, { defaultProps });
    const ResultElement = screen.getByRole('value');
    expect(currentValue).toBe(0);
    fireEvent.change(ResultElement, { target: { value: 0 } });
    expect(alertMock).toHaveBeenCalledTimes(0);
  });
})