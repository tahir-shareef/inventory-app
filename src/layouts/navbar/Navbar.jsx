import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import './navbar.css';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default function Navbar({
  open,
  handleDrawerOpen,
  handleDrawerClose,
  ...otherProps
}) {
  const menuId = 'primary-search-account-menu';
  return (
    <AppBar position="fixed" open={open} {...otherProps}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(open && { display: 'none' })
          }}
          size="large"
        >
          <MenuIcon fontSize="30px" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
          <IconButton className="search-icon" size="large" color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <NotificationsIcon fontSize="10px" />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <Typography className="primary-color" sx={{ margin: 1 }}>
              Ann Lee
            </Typography>
            <svg
              className="arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              id="arrow"
            >
              <path d="M16.682 19.674c.01-.012.014-.028.024-.04l6.982-7.714c.39-.434.39-1.138 0-1.572-.004-.004-.008-.006-.012-.008a.936.936 0 0 0-.712-.34H8.998a.948.948 0 0 0-.722.352l-.004-.004a1.202 1.202 0 0 0 0 1.572l6.998 7.754a.928.928 0 0 0 1.412 0z" />
            </svg>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
