import React from 'react';
import ButtonBase from './button.style';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
    <ButtonBase type="button" disabled={disabled} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

export default Button;
