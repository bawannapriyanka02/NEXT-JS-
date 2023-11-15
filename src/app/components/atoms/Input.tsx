import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ className, type, placeholder, value, onChange, ...rest }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
