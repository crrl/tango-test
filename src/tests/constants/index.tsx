import { render } from '@testing-library/react';
import Context from '../../components/context';

export const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  let provider = providerProps ? providerProps : defaultProps;
  return render(
    <Context.Provider value={{ ...provider }}>{ui}</Context.Provider>,
    renderOptions,
  )
};

export const defaultProps = {
  value: 0,
  result: 0
}
