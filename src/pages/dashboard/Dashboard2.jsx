import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '../../components/card/Card';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './dashboard.css';
import GraphsRow from '../../components/graph-row/GraphsRow';

const Dashboard = () => {
  const cardItems = [
    {
      title: "Today's sales",
      amount: '30,000',
      icon: <PriceCheckIcon fontSize="30px" />,
      color: 'purple'
    },
    {
      title: "Today's total order",
      amount: '270',
      icon: <PriceCheckIcon fontSize="30px" />,
      color: 'blue'
    },
    {
      title: "Today's Revenue",
      amount: '1,000',
      icon: <PriceCheckIcon fontSize="30px" />,
      color: 'red'
    },
    {
      title: "Today's Customers",
      amount: '100',
      icon: <PriceCheckIcon fontSize="30px" />,
      color: '#b5b500'
    }
  ];

  return (
    <Box className="dashboard">
      <Box className="list-row">
        {cardItems.map((item, i) => {
          return (
            <Card key={i} sx={{ width: '25%' }}>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  {item.icon}
                </Grid>
                <Grid item xs={7} display="flex" justifyContent={'center'}>
                  <Typography
                    textAlign="center"
                    sx={{ color: item.color }}
                    variant="h3"
                  >
                    {item.amount}
                  </Typography>
                </Grid>
                <Grid item xs={3} display="flex" alignItems="center">
                  <ArrowUpwardIcon sx={{ mr: 2 }} className="add-icon" />
                  <span>12%</span>
                </Grid>
              </Grid>
              <Typography className="subtitle" textAlign="center" marginTop={2}>
                {item.title}
              </Typography>
            </Card>
          );
        })}
      </Box>

      <Box className="list-row">
        <GraphsRow />
      </Box>
    </Box>
  );
};

export default Dashboard;
