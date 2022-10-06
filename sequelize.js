const sequelize = require('sequelize');
const connection = new sequelize('respondio', 'root', '', {
    dialect: 'mysql',
});

module.exports = connection;