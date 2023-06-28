import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CoverImage from '../../assets/auth-cover.png';
import BoxRow from '../../components/boxRow/BoxRow';
import TextField from '../../components/TextField/TextField';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <Grid container className="signup-page" spacing={2}>
      {/* Left side */}
      <Grid item md={5}>
        <Box className="signup-left">
          <img src={CoverImage} alt="cover" />
        </Box>
      </Grid>

      {/* Right side */}
      <Grid item md={7} sm={12}>
        <Box className="signup-right">
          <BoxRow />
          <Typography marginBottom="30px" variant="h5">
            Register
          </Typography>
          <Typography className="caption-text" variant="h6" marginBottom="6px">
            Manage all your inventory efficiently
          </Typography>
          <Typography className="primary-color subtitle" marginBottom="15px">
            Let's get you all set up so you can verify your personal account and
            begin setting up your work profile
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('isLoggedIn', 'true');
              navigate('/dashboard-1');
            }}
            className="form-fields"
          >
            {' '}
            <Grid container columnSpacing={3} marginBottom={3}>
              <Grid xs={6} item>
                <TextField
                  required
                  label="First name"
                  placeholder="Enter your name"
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Last name"
                  placeholder="Enter your last name"
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} marginBottom={3}>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Email"
                  placeholder="Enter your email"
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Phone no."
                  placeholder="Enter your phone no."
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} marginBottom={2}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Password"
                  placeholder="Enter your password"
                />
              </Grid>
            </Grid>
            <Box marginBottom={2}>
              <Checkbox
                label={
                  <Typography className="subtitle">
                    I agree to all terms ,{' '}
                    <Link to="http://www.google.com" target="_blank">
                      privacy policies
                    </Link>
                    , and{' '}
                    <Link to="http://www.google.com" target="_blank">
                      fees
                    </Link>
                  </Typography>
                }
              />
            </Box>
            <Box marginBottom={2}>
              <Button type="submit" width="200px">
                Sign up
              </Button>
            </Box>
            <Box>
              <Typography className="subtitle">
                Already have an account? <Link to="/login">Log in</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
