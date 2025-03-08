import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles'; // Import useTheme
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '12px',
    marginTop: theme.spacing(1),
    minWidth: 200,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '& .MuiMenu-list': {
      padding: '8px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
      transition: 'background-color 0.2s ease',
    },
  },
}));

export default function CustomizedMenus() {
  const theme = useTheme(); // Access the theme object
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginTop: '-3px', marginLeft: '8px' }} >
      <Button
        id="demo-customized-button"
        className='bg-white text-dark mt-1'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          borderRadius: '99px',
          textTransform: 'none',
          padding: '8px 16px',
          fontSize: '0.875rem',
          fontWeight: 500,
          backgroundColor: theme.palette.background.paper, // Use theme here
          color: theme.palette.text.primary, // Use theme here
          border: '1px solid',
          borderColor: theme.palette.divider, // Use theme here
          '&:hover': {
            backgroundColor: alpha(theme.palette.background.paper, 0.9), // Use theme here
            borderColor: theme.palette.primary.main, // Use theme here
          },
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`, // Use theme here
          },
          '& .MuiButton-endIcon': {
            marginLeft: '4px',
          },
        }}
      >
        Portfolio
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <a href="/portfolio/collaboration" className='text-dark' style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} disableRipple>
            <GroupsIcon />
            Collaboration Workflow Platform
          </MenuItem>
        </a>
        <a href="/portfolio/jobseeking" className='text-dark' style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} disableRipple>
            <WorkOutlineIcon />
            Job Seeking
          </MenuItem>
        </a>
        <Divider sx={{ my: 0.5 }} />
        <a href="/portfolio" className='text-dark' style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </a>
      </StyledMenu>
    </div>
  );
}