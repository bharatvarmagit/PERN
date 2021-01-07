const express = require('express');
const router = express.Router();
const {db} = require('../config/database')
const {Customer} = require('../models/customer')
const {verifyToken} = require('../routes/auth')
const jwt = require('jsonwebtoken')

//get all customers
router.get('/', verifyToken,  (req, res) => {
       Customer.findAll()
        .then(data=>{
            console.log("cusomters are :\n \t",data);
            let myres=[];
            data.forEach(row=>myres.push(row.firstName))
            res.send(myres)
        }).catch(err=>{
            console.log("encountered error",err)
        })
});
//add customer
// router.get('/add', (req, res) => {
//     const data = {
//         firstName: 'divya',
//         lastName: 'datla',
//         email: 'divya.datla@gmail.com'
//     }
//     Customer.create(data)
//         .then(returnData => res.redirect('/customers'))
//         .catch(err => console.log(err))

// })
module.exports = router;
