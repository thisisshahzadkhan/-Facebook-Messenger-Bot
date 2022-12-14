const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');
const product =  sequelize.define('product', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    shipping: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'product'
});
module.exports = product;