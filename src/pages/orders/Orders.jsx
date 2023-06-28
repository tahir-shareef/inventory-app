import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BasicTable from '../../components/table/Table';
import { ordersHeadCells } from '../../utils';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Checkbox from '../../components/checkbox/Checkbox';
import { useApi } from '../../hooks/useAPI';
import { getOrders } from '../../services/api';
import './orders.css';
import Loader from '../../components/loader/Loader';

const Orders = () => {
  const [age, setAge] = useState('');
  const [ordersData, setOrdersData] = useState([]);
  const [ordersLoading, ordersError, callOrdersApi] = useApi();

  const getOrdersData = useCallback(() => {
    callOrdersApi(() => getOrders()).then((res) => {
      setOrdersData(res.data);
    });
  }, [callOrdersApi]);

  useEffect(() => {
    getOrdersData();
  }, [getOrdersData]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="orders-page">
      <Grid container marginBottom={2}>
        <Grid xs={7} item>
          <Typography className="orders-heading"> Orders</Typography>
        </Grid>
        <Grid className="mr-15" xs={1.5} item>
          <Button
            fullWidth
            sx={{
              padding: '10px 14px 10px 6px',
              marginRight: '23px',
              textTransform: 'none'
            }}
            variant="outlined"
          >
            Export to excel
          </Button>
        </Grid>

        <Grid className="mr-15" xs={1.5} item>
          <Button
            fullWidth
            sx={{
              padding: '10px 14px 10px 6px',
              marginRight: '23px',
              textTransform: 'none'
            }}
            variant="outlined"
          >
            Import Orders
          </Button>
        </Grid>

        <Grid className="mr-15" xs={1.5} item>
          <Button
            fullWidth
            sx={{
              padding: '10px 14px 10px 6px',
              marginRight: '23px',
              textTransform: 'none'
            }}
            variant="contained"
          >
            <AddOutlinedIcon />
            New Orders
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container marginBottom={2} padding={2}>
        <Grid xs={4} item>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search order Id"
            InputProps={{
              startAdornment: <SearchIcon fontSize="25px" sx={{ mr: 1 }} />
            }}
          />
        </Grid>
        <Grid xs={3.5} item></Grid>
        <Grid xs={3} item display="flex" alignItems="center">
          <DateRangeIcon className="calendar-icon" />
          <Box className="mr-15" sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Sales</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Sales"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="mr-15" sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="mr-15" sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Grid container marginBottom={2}>
        <Grid xs={12} item>
          {ordersLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px'
              }}
            >
              <Loader />
            </Box>
          ) : ordersError ? (
            <div className="error">{ordersError}</div>
          ) : (
            <BasicTable showCheckBox headcells={ordersHeadCells}>
              {ordersData.map((o) => {
                return (
                  <TableRow key={o.orderID}>
                    <TableCell component="th" scope="row">
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {o.orderID}
                    </TableCell>
                    <TableCell>{o.date}</TableCell>
                    <TableCell>{o.customer}</TableCell>
                    <TableCell>{o.salesChannel}</TableCell>
                    <TableCell>{o.destination}</TableCell>
                    <TableCell>{o.items}</TableCell>
                    <TableCell>
                      <Chip
                        sx={{ width: '90px' }}
                        color={
                          o.status === 'Completed' ? 'success' : 'secondary'
                        }
                        label={o.status}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* <TableRow>
                <TableCell component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row">
                  Order ID
                </TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Catagory</TableCell>
                <TableCell>Sales channel</TableCell>
                <TableCell>Instruction</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>
                  <Chip
                    sx={{ width: '90px' }}
                    color="success"
                    label="Completed"
                  />
                </TableCell>
              </TableRow> */}
            </BasicTable>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;
