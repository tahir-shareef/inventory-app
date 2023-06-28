import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CoverImage from '../../assets/auth-cover.png';
import BoxRow from '../../components/boxRow/BoxRow';
import TextField from '../../components/TextField/TextField';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Grid container className="login-page" spacing={2}>
      {/* Left side */}

      <Grid item md={4} sm={12}>
        <Box className="login-right">
          <BoxRow />
          <Typography marginBottom="30px" variant="h5">
            Login
          </Typography>

          <Typography className="subtitle primary-color" marginBottom={2}>
            See your growth and get support!
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard-1');
              localStorage.setItem('isLoggedIn', 'true');
            }}
            className="form-fields"
          >
            <Grid container columnSpacing={3} marginBottom={2}>
              <Grid xs={12} item>
                <Button
                  fullWidth
                  endIcon={
                    <svg width="25" viewBox="0 0 186.69 190.5">
                      <g transform="translate(1184.583 765.171)">
                        <path
                          clip-path="none"
                          mask="none"
                          d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                          fill="#4285f4"
                        />
                        <path
                          clip-path="none"
                          mask="none"
                          d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                          fill="#34a853"
                        />
                        <path
                          clip-path="none"
                          mask="none"
                          d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                          fill="#fbbc05"
                        />
                        <path
                          d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                          fill="#ea4335"
                          clip-path="none"
                          mask="none"
                        />
                      </g>
                    </svg>
                  }
                  className="google-icon"
                  variant="outlined"
                >
                  Sign in with Google
                </Button>
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} marginBottom={2}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Email*"
                  placeholder="Enter your Email"
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} marginBottom={2}>
              <Grid xs={12} item>
                <TextField
                  required
                  label="Password*"
                  placeholder="Enter your Password"
                />
              </Grid>
            </Grid>
            <Grid container columnSpacing={3} justifyContent="space-between">
              <Grid item>
                <Box marginBottom={2}>
                  <Checkbox
                    label={
                      <Typography className="subtitle">Remember me</Typography>
                    }
                  />
                </Box>
              </Grid>
              <Grid item marginTop={2}>
                <Link to="http://www.google.com" target="_blank">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>

            <Box marginBottom={2}>
              <Button type="submit" width="100%">
                Login
              </Button>
            </Box>

            <Box>
              <Typography className="subtitle">
                Not registered yet?{' '}
                <Link to="/register">Create a new account</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Grid>

      {/* Right side */}
      <Grid item md={8} sm={12}>
        <Box className="login-right">
          <img src={CoverImage} alt="cover" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
