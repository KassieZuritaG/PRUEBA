import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function TableComponent() {
  const data = [
    { id: 1, nombre: 'Producto 1', descripcion : 'Descripcion Producto 1',  precio: 10.99, cantidad_en_stock: 55},
    { id: 2, nombre: 'Producto 2', descripcion : 'Descripcion Producto 2', precio: 19.99, cantidad_en_stock: 35},
    { id: 3, nombre: 'Producto 3', descripcion : 'Descripcion Producto 3', precio: 5.49, cantidad_en_stock: 5},
    // Agrega más datos aquí
  ];

  return (
    <TableContainer component={Paper}>
        <h1 align="center">Tabla de Productos</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Cantidad en Stock</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.nombre}</TableCell>
              <TableCell>{product.descripcion}</TableCell>
              <TableCell>{product.precio}</TableCell>
              <TableCell>{product.cantidad_en_stock}</TableCell>
              <TableCell>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Editar
                </Button>
              </TableCell>
              <TableCell>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
