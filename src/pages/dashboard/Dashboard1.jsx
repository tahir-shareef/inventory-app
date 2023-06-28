import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '../../components/card/Card';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import AddIcon from '@mui/icons-material/Add';
import './dashboard.css';

const Dashboard = () => {
  const cardItems = [
    {
      title: 'Revenue',
      amount: '30,000',
      icon: <PriceCheckIcon fontSize="30px" />
    },
    {
      title: 'Revenue',
      amount: '30,000',
      icon: <PriceCheckIcon fontSize="30px" />
    },
    {
      title: 'Revenue',
      amount: '30,000',
      icon: <PriceCheckIcon fontSize="30px" />
    },
    {
      title: 'Revenue',
      amount: '30,000',
      icon: <PriceCheckIcon fontSize="30px" />
    }
  ];

  return (
    <Box className="dashboard">
      <Box className="list-row">
        {cardItems.map((item) => {
          return (
            <Card sx={{ width: '25%' }}>
              <Typography marginBottom={2}>{item.title}</Typography>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  {item.icon}
                </Grid>
                <Grid item xs={10} display="flex" alignItems={'center'}>
                  <Box sx={{ pr: 1 }}>
                    <AddIcon className="add-icon" />
                  </Box>
                  <Typography variant="h3">{item.amount}</Typography>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Dashboard;
