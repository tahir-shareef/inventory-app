import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Page404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '50px'
      }}
    >
      <h1>404 page not found</h1>
      <Button
        sx={{
          a: {
            color: 'white !important'
          }
        }}
        width={'200px'}
        variant="contained"
      >
        <Link to={'/'}> Go to dashboard</Link>
      </Button>
    </Box>
  );
};

export default Page404;
