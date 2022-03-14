import { memo, useCallback, useState } from 'react';
import './App.css';
import { Button, Textbox, Title, Result } from './components';
import Context from './components/context';
import axios from './axios.config';

function App() {
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const calculateFibonacci = useCallback(async (value: number) => {
    try {
      let response = await axios.get(`fibonacci/${value}`);
      setResult(response?.data?.value);
    } catch (error) {
      alert('Something went wrong, contact your system admin.')
    }
  }, []);


  return (
    <Context.Provider value={{
      value,
      result
    }}>
      <div className='container'>
        <Title text={'Calculate Fibonacci!'} />
        <Textbox setValue={setValue} />
        <Button text={'Calculate'} onClick={() => calculateFibonacci(value)} />
        <Result />
      </div>
    </Context.Provider>
  );
}

export default memo(App);
