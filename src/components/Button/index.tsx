import {
  memo
} from "react";
type Props = {
  text: string,
  onClick: () => void
};
const Button = ({ text, onClick }: Props) => {

  return (
    <button role='calculate' onClick={onClick}>{text}</button>
  )
};

export default memo(Button);