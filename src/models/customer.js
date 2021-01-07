const { DataTypes} = require('sequelize');
const {db} = require('../config/database')

const Customer =  db.define('Customer', {
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.BIGINT
    },
    email: {
        type: DataTypes.STRING
    }
},{
    tableName: 'customers',
});

 module.exports.Customer = Customer;
