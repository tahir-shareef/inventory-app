import React from 'react';
import { Divider as MUIDivider } from '@mui/material';
const Divider = ({ sx = {}, ...otherPRops }) => {
  return (
    <MUIDivider
      sx={{
        borderStyle: 'solid',
        borderColor: 'rgb(127 127 127)',
        borderBottomWidth: '3px',
        // marginTop: '16px',
        marginBottom: '16px',
        ...sx
      }}
      {...otherPRops}
    />
  );
};

export default Divider;
