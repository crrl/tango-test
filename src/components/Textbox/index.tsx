import {
  memo
} from "react";
type Props = {
  value: number,
  setValue: (value: number) => void
};
// { number }: Props
const Textbox = ({ value, setValue }: Props) => {

  const handleValueChange = (newValue: number): void => {
    try {
      if (newValue < 0 || newValue > 50) {
        throw ('Value not allowed');
      }
      setValue(newValue);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <input role='value' type='number' value={value} onChange={(ev) => handleValueChange(+ev.target.value)} />
  )
};

export default memo(Textbox);