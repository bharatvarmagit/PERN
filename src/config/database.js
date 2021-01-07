const {Sequelize} = require('sequelize');

const db = new Sequelize('test', 'bharat', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
});
module.exports.db = db;
