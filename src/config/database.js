const Sequelize = require('sequelize');
module.exports = new Sequelize('test', 'bharat', '', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 0,
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});
