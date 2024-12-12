const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd', 'root', '', {
  host: 'localhost',
  dialect: 'sqlite'
});

module.exports = sequelize;
