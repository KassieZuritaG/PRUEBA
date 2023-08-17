import React from 'react';
import { TextField, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';


const DynamicForm = () => {
  return (

    <Paper sx={{ p: 3, maxWidth: 400, margin: '0 auto' }}>
      <form>
        <h1 align="center">Editar Producto</h1>
        <TextField label="Nombre" fullWidth margin="normal" />
        <TextField label="Descripción" fullWidth margin="normal" />
        <TextField label="Precio" type="number" fullWidth margin="normal" inputProps={{ inputMode: 'numeric' }} />
        <TextField
          label="Cantidad en Stock"
          type="number"
          fullWidth
          margin="normal"
          inputProps={{
            inputMode: 'numeric',
            step: 1,
            pattern: '[0-9]*', // Acepta solo números enteros
          }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
          Guardar
        </Button>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Cancelar
        </Button>
      </form>
    </Paper>
  );
}

export default DynamicForm;