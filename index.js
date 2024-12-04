
const express = require('express');
const cors = require('cors');
const {router: authRoutes, authMiddleware} = require('./routes/auth');
const menuRoutes = require('./routes/product');
const orderRoutes = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes); 
app.use(authMiddleware); 
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
