const express = require('express');
const router = express.Router();
const Marker = require('./models/marker'); 

router.get('/location', async (req, res) => {
  try {
    const locations = await Marker.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar as localizações' });
  }
});