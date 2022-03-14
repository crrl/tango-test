import {
  memo
} from "react";
type Props = {
  result: number,
};
const Result = ({ result }: Props) => {

  return (
    <div>
      <span>Fibonacci Result: </span><span role="result">{result}</span>
    </div>
  )
};

export default memo(Result);