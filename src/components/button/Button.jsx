import React from 'react';
import { Button as MUIButton } from '@mui/material';
import './button.css';

const Button = ({
  children,
  width,
  variant = 'contained',
  sx = {},
  ...otherProps
}) => {
  return (
    <MUIButton
      sx={{
        ...(width ? { width } : {}),
        ...sx
      }}
      variant={variant}
      className="custom-button"
      {...otherProps}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
