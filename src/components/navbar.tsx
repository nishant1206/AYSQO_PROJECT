import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function TopNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'primary.dark', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'black' }}>
        MyLogo
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton href={link.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.label} sx={{ color : "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton href="/booking" sx={{ textAlign: 'center', mt: 1, bgcolor: 'secondary.main', borderRadius: 2 }}>
            <ListItemText primary="Book Now" sx={{ color: '#fff' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#fff' , boxShadow : "-1px -6px 10px 1px black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'black',
              fontWeight: 700,
            }}
          >
            MyLogo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{ color: '#000', textTransform: 'none', '&:hover': { color: 'secondary.main' } }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              href="/booking"
              variant="contained"
              sx={{ ml: 2, bgcolor: 'blue', textTransform: 'none', '&:hover': { bgcolor: 'secondary.dark' } }}
            >
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
