// import React from 'react';
import { screen } from '@testing-library/react';
import { customRender, defaultProps } from '../constants';

import Result from '../../components/Result';


test('prints the right result in screen', () => {
  customRender(<Result />, { defaultProps });
  const ResultElement = screen.getByRole('result-span');
  expect(ResultElement.textContent).toBe('0');
});
