import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffa726' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" style={{height:'2rem', weight:'2rem'}}/>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" onClick={() => handleScroll('home')}>Home</Button>
          <Button color="inherit" onClick={() => handleScroll('collections')}>Collections</Button>
          <Button color="inherit" onClick={() => handleScroll('testimonials')}>Testimonials</Button>
          <Button color="inherit" onClick={() => handleScroll('contact')}>Contact</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleScroll('home')}>Home</MenuItem>
            <MenuItem onClick={() => handleScroll('collections')}>Collections</MenuItem>
            <MenuItem onClick={() => handleScroll('testimonials')}>Testimonials</MenuItem>
            <MenuItem onClick={() => handleScroll('contact')}>Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar