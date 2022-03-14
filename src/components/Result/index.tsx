import {
  memo, useContext
} from "react";
import './index.css';
import Context from '../context';
const Result = () => {
  const ValuesContext = useContext(Context);
  return (
    <div>
      <span>Fibonacci Result: </span><span role="result-span" className='result'>{ValuesContext.result}</span>
    </div>
  )
};

export default memo(Result);