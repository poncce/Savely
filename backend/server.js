require('dotenv').config();
const express = require('express');
const buscarRouter = require('./routes/buscar');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ servicio: 'Savely', estado: 'activo' });
});

app.use('/buscar', buscarRouter);

function iniciar() {
  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`Backend corriendo en http://localhost:${PORT}`);
      resolve(server);
    });
  });
}




if (require.main === module) {
  iniciar();
}

module.exports = { app, iniciar };
