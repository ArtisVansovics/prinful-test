import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string
  onClick?: () => void
  disabled?: boolean;
}

const Button:FC<ButtonProps> = ({ title, onClick, disabled }) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
);

export default Button;
