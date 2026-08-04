const { Router } = require('express');
const { compararPrecios } = require('../services/comparador');

const router = Router();

router.get('/', async (req, res) => {
  const { producto } = req.query;

  if (!producto || producto.trim().length === 0) {
    return res.status(400).json({ error: 'Falta el parámetro "producto"' });
  }

  try {
    const resultado = await compararPrecios(producto.trim());
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor', detalle: err.message });
  }
});

module.exports = router;
