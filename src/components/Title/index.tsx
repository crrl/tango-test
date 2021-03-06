import {
  memo
} from "react";
import './index.css';
type Props = {
  text: string
};

const Tittle = ({ text }: Props) => {
  return (
    <h4 role='title' className='title'>{text}</h4>
  )
};

export default memo(Tittle);