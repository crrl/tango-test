import {
  memo, useContext
} from "react";

import Context from '../../context';

type Props = {
  setValue: (value: number) => void
};
const Textbox = ({ setValue }: Props) => {
  const ValueContext = useContext(Context);
  const handleValueChange = (newValue: number): void => {
    try {
      let cleanValue: number = Math.floor(newValue);
      //This validation was made here to use some more code on the Frontend.
      if (cleanValue < 0 || cleanValue > 50) {
        throw (new Error('Value not allowed'));
      }
      setValue(cleanValue);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <input role='input' type='number' value={ValueContext.value} onChange={(ev) => handleValueChange(+ev.target.value)} />
  )
};

export default memo(Textbox);