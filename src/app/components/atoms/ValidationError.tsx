import React, { FC } from 'react';

interface ValidationErrorProps {
  message: string;
}

const ValidationError: FC<ValidationErrorProps> = ({ message }) => {
  return <span style={{ color: 'red' }}>{message}</span>;
};

export default ValidationError;
