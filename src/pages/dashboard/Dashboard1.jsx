import { Box, Grid, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import Card from '../../components/card/Card';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import AddIcon from '@mui/icons-material/Add';
import BasicTable from '../../components/table/Table';
import { stockAlertHeadcells, topSellingsProductsHeadCells } from '../../utils';
import Divider from '../../components/Divider/Divider';
import './dashboard.css';
import GraphsRow from '../../components/graph-row/GraphsRow';

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
        {cardItems.map((item, i) => {
          return (
            <Card key={i} sx={{ width: '25%' }}>
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

      <Box className="list-row">
        <GraphsRow />
      </Box>

      <Box className="list-row">
        <Grid container spacing={2}>
          <Grid xs={8} item>
            <Card sx={{ display: 'block' }} fullWidth>
              <Box sx={{ p: 3, pb: 1 }}>
                <Typography fontWeight={500} variant="h5">
                  Stock Alert
                </Typography>
              </Box>
              <Divider />
              <BasicTable headcells={stockAlertHeadcells}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </BasicTable>
            </Card>
          </Grid>
          <Grid xs={4} item>
            <Card sx={{ display: 'block' }} fullWidth>
              <Box sx={{ p: 3, pb: 1 }}>
                <Typography fontWeight={500} variant="h5">
                  Top Selling Products
                </Typography>
              </Box>
              <Divider />
              <BasicTable headcells={topSellingsProductsHeadCells}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Alert amt.</TableCell>
                </TableRow>
              </BasicTable>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
