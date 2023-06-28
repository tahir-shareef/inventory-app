import { Box, Button, ListItemText, Popover, Typography } from '@mui/material';
import React from 'react';
import {
  NavLink as MUINavLink,
  useLocation,
  useNavigate
} from 'react-router-dom';

const NavLink = ({ href, isHaveDropdown, dropdown, icon, label }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? label + '-id' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUINavLink
        to={href}
        onClick={(e) => {
          if (isHaveDropdown) {
            e.preventDefault();
            handleClick(e);
          }
        }}
        className={(nav) => {
          let className = 'navlink';
          let isClassActive = nav.isActive;

          if (isHaveDropdown) {
            if (dropdown.some((l) => l.href === location.pathname)) {
              isClassActive = true;
            }
          }

          if (isClassActive) {
            className += ' active';
          }

          return className;
        }}
        sx={{
          minHeight: 48
        }}
      >
        {icon}

        <ListItemText primary={label} />
      </MUINavLink>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {dropdown.map((l) => {
          return (
            <Box>
              <Button
                onClick={() => {
                  navigate(l.href);
                  handleClose();
                }}
              >
                {l.label}
              </Button>
            </Box>
          );
        })}
      </Popover>
    </>
  );
};

export default NavLink;
