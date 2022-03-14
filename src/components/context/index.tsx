import { createContext } from 'react';

type Context = {
  value: number,
  result: number
}

const defaultState = {
  value: 0,
  result: 0
}
const Context = createContext(defaultState);

export default Context;

