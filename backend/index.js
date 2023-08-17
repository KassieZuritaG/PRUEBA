const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3100;

app.use('/api', mainRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});