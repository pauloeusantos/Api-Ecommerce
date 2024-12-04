
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Obter produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produtos' });
  }
});

// Adicionar produto (somente admin)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const product = await Product.create({ name, description, price, category, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar produto' });
  }
});

module.exports = router;
