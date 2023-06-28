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
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './instock.css';
import BasicTable from '../../components/table/Table';
import { inStockHeadCells } from '../../utils';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Checkbox from '../../components/checkbox/Checkbox';
const Instock = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="in-stock">
      <Grid container marginBottom={2}>
        <Grid xs={10} item>
          <Typography className="instock-heading">In stock</Typography>
        </Grid>
        <Grid xs={1.5} item>
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
            New Stock
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container marginBottom={2} padding={2}>
        <Grid xs={10} item>
          <TextField
            // fullWidth
            variant="outlined"
            placeholder="Quick Search..."
            InputProps={{
              startAdornment: <SearchIcon fontSize="25px" sx={{ mr: 1 }} />
            }}
          />
        </Grid>
        <Grid xs={2} item display="flex" alignItems="center">
          <DateRangeIcon className="calendar-icon" />
          <Box sx={{ minWidth: 120 }}>
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
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Grid container marginBottom={2}>
        <Grid xs={12} item>
          <BasicTable showCheckBox headcells={inStockHeadCells}>
            <TableRow>
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
                  color="secondary"
                  label="Pending"
                />
              </TableCell>
            </TableRow>
            <TableRow>
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
            </TableRow>
            <TableRow>
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
                  color="secondary"
                  label="Pending"
                />
              </TableCell>
            </TableRow>
            <TableRow>
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
            </TableRow>
            <TableRow>
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
                  color="secondary"
                  label="Pending"
                />
              </TableCell>
            </TableRow>
            <TableRow>
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
            </TableRow>
          </BasicTable>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Instock;
