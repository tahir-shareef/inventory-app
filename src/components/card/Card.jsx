import React from 'react';
import { Box } from '@mui/material';
import './card.css';

const Card = ({ children, ...otherProps }) => {
  return (
    <Box {...otherProps} className="card">
      {children}
    </Box>
  );
};

export default Card;
