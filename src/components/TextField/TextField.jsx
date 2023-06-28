import React from 'react';
import { Box, TextField as MUITextField } from '@mui/material';
import './textfield.css';

const TextField = ({ label, ...otherProps }) => {
  return (
    <Box className ="text-field-container">
      {label && <label>{label}</label>}
      <MUITextField className="text-field" {...otherProps} />
    </Box>
  );
};

export default TextField;
