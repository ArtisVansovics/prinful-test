import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string
  onClick: () => void
}

const Button:FC<ButtonProps> = ({ title, onClick }) => (
  <button className="button" onClick={onClick}>
    {title}
  </button>
);

export default Button;
