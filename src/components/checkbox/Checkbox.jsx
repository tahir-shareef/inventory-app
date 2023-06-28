import React from 'react';
import { FormControlLabel, Checkbox as MUICheckbox } from '@mui/material';
import './checkbox.css';

const Checkbox = ({ label, ...otherProps }) => {
  if (label) {
    return (
      <FormControlLabel
        label={label}
        control={<MUICheckbox {...otherProps} />}
      ></FormControlLabel>
    );
  }

  return <MUICheckbox className="custom-checkbox" {...otherProps} />;
};

export default Checkbox;
