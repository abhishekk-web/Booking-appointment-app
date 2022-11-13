const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const  Data = sequelize.define('data', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    phone: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unique: true
    },
    

});

module.exports = Data;

