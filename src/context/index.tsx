import { createContext } from 'react';

const defaultState = {
  value: 0,
  result: 0
};

const Context = createContext(defaultState);

export default Context;

