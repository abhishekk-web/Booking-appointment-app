const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
