import React from 'react';

import ButtonBase from './button.style';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

const Button = (props: IButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
    <ButtonBase type="button" disabled={disabled} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

export default Button;
