const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');


// test DB
db.authenticate()
    .then(() => console.log("db aunthenticated"))
    .catch(err => console.log("caught error : ",err))

const app = express()

app.get('/',(req,res) => res.send('Hello World'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server startted on port ${PORT}`))
