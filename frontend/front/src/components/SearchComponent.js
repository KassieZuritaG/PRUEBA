import React from 'react';
import { IconButton, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '99%' }}>
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <TextField
        id="outlined-basic"
        label="Buscar..."
        variant="outlined"
        sx={{ flex: 1 }} // Ancho dinámico
      />
    </Paper>
  );
}

export default SearchBar;
