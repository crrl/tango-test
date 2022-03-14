/* tslint:disable */
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { customRender, defaultProps } from '../constants';


import '@testing-library/jest-dom';
import App from '../../App';
import { act } from 'react-dom/test-utils';
import server from '../mocks/Fibonacci';



beforeEach(() => {
  customRender(<App />, { defaultProps });
});


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('test for the title on the screen', () => {
  test('should render the title', () => {
    const linkElement = screen.getByRole('title');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.textContent).toBe('Calculate Fibonacci!')
  });
});

describe('test for the text input on the screen', () => {
  test('should render the text input', () => {
    const linkElement = screen.getByRole('value');
    expect(linkElement).toBeInTheDocument();
  });

  test('should show value 0 as default.', () => {
    const linkElement = screen.getByRole('value') as HTMLInputElement;
    expect(linkElement.value).toBe('0');
  });
});


describe('test for the calculate button on the screen', () => {
  test('should render the button', () => {
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
  });

  test('should render the button with "Calculate" text', () => {
    const linkElement = screen.getByRole('button');
    expect(linkElement.textContent).toBe('Calculate')
  });
});


describe('test for the results on the screen', () => {
  test('should render the result', () => {
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
  });

  test('executes the function passed to the Button.', async () => {
    const linkElement = screen.getByRole('button');
    await act(async () => { await fireEvent.click(linkElement) });
    await waitFor(() => {
      expect(screen.getByRole('result-span').textContent).toBe('1');
    });
  });
});
