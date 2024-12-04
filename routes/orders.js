
const express = require('express');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');
const router = express.Router();

// Criar novo pedido
router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body; 
    let total = 0;

    items.forEach(item => {
      total += item.price * item.quantity;
    });

    const order = await Order.create({ userId, total });

   o
    items.forEach(async (item) => {
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      });
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

module.exports = router;
