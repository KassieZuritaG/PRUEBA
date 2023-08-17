import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Button variant="contained" color="primary" href="#contained-buttons">
        Agregar nuevo
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;