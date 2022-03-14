import { memo, useState, useEffect } from 'react';
import './App.css';
import { Button, Textbox, Title, Result } from './components';
import Context from './components/context';
import axios from './axios.config';

function App() {
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const calculateFibonacci = async (value: number) => {
    try {
      let response = await axios.get(`fibonacci/${value}`);
      isMounted && setResult(response?.data?.value);
    } catch (error) {
      alert('Something went wrong, contact your system admin.')
    }
  };

  return (
    <Context.Provider value={{
      value,
      result
    }}>
      <div>
        <Title text={'Calculate Fibonacci!'} />
        <Textbox value={value} setValue={setValue} />
        <Button text={'Calculate'} onClick={() => calculateFibonacci(value)} />
        <Result result={result} />
      </div>
    </Context.Provider>
  );
}

export default memo(App);
