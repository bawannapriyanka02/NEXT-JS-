import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick, type, ...rest }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
