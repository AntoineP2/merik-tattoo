"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Drawer } from "@mui/material";
import ListMenu from './ListMenu';

export default function NavBar() {

  //--------------------Variable--------------------
  const [value, setValue] = React.useState("0");
  const [drawerState, setDrawerState] = React.useState(false);


  //--------------------Function--------------------

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const drawerHandleClick = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ------------APP BAR MOBILE------------------ */}
      <AppBar position="static" sx={{ display: { xl: 'none', lg: 'none', md: 'none' } }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={drawerHandleClick}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerState} onClose={drawerHandleClick}>
            <ListMenu drawerHandleClick={drawerHandleClick} />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <p className="flex items-center justify-center">News</p>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* ------------APP BAR DESKTOP------------------ */}
      <AppBar position="static" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
        <Toolbar>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" value="0" />
            <Tab label="Item Two" value="1" />
            <Tab label="Item Three" value="2" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

