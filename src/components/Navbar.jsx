
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Import your logo

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);

const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setDrawerOpen(open);
};

const buttonStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  letterSpacing: '1.5px',
  color: '#1F2128',
  textTransform: 'none',
  marginLeft: '20px', // Space between buttons
};

return (
  <AppBar sx={{ background: "#fff", height: '80px', padding: 0, margin: 0 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ width: '70px', height: '30px' }} />

{
  /* Buttons Section */
}
{
<div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={buttonStyle}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/project" sx={buttonStyle}>
            Project
          </Button>
          <Button color="inherit" component={Link} to="/aboutus" sx={buttonStyle}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/gallery" sx={buttonStyle}>
            Gallery
          </Button>
          <Button color="inherit" component={Link} to="/faqs" sx={buttonStyle}>
            FAQs
          </Button>
          <Button color="inherit" component={Link} to="/bloglist" sx={buttonStyle}>
            Blog List
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={buttonStyle}>
            Contact
          </Button>
        </div> 
}

{
  /* Hamburger Menu */
}
{
  <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: '#1F2128' }} />
        </IconButton> 
}

{
  /* Drawer */
}

   <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '240px',
              backgroundColor: '#f5f5f5',
              color: '#fff',
            },
          }}
        > 

{
  <div style={{ padding: '20px' }}>
            <Typography variant="h6" sx={{ color: '#1F2128', marginBottom: '20px' }}>Menu</Typography>
            <List>
              <ListItem button component={Link} to="/" sx={buttonStyle}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/project" sx={buttonStyle}>
                <ListItemText primary="Project" />
              </ListItem>
              <ListItem button component={Link} to="/aboutus" sx={buttonStyle}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button component={Link} to="/gallery" sx={buttonStyle}>
                <ListItemText primary="Gallery" />
              </ListItem>
              <ListItem button component={Link} to="/faqs" sx={buttonStyle}>
                <ListItemText primary="FAQs" />
              </ListItem>
              <ListItem button component={Link} to="/bloglist" sx={buttonStyle}>
                <ListItemText primary="Blog List" />
              </ListItem>
              <ListItem button component={Link} to="/contact" sx={buttonStyle}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </div> 
}
//         </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
