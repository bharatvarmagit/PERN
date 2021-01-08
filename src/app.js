const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { db } = require('./config/database');
const Sequelize  = require('sequelize');
const {Customer} = require('./models/customer')


// test DB
db.authenticate()
    .then(() => console.log("db aunthenticated"))
    .catch(err => console.log("caught error : ",err))


async function main(){
    await Customer.sync({alter:true})
    const app = express()
    //ROUTE MIDDLEWARES
    //index routes
    app.get('/',(req,res) => res.send('Hello World'));
    //customer routes
    app.use('/customers',require('./routes/customers'));
    //auth routes
    app.use('/auth', require('./routes/auth'))
    const PORT = process.env.PORT || 5000;
    app.listen(PORT,console.log(`server startted on port ${PORT}`))
}
