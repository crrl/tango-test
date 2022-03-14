import {
  memo
} from "react";
type Props = {
  text: string
};

const Tittle = ({ text }: Props) => {
  return (
    <h4 role='title'>{text}</h4>
  )
};

export default memo(Tittle);