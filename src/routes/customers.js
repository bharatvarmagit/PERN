const express = require('express');
const router = express.Router();
const {db} = require('../config/database')
const {Customer} = require('../models/customer')
const jwt = require('jsonwebtoken')

//get all customers
router.get('/', verifyToken,  (req, res) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) res.sendStatus(403);
            else{
                Customer.findAll()
                    .then(data=>{
                        console.log("cusomters are :\n \t",data);
                        let myres=[];
                        data.forEach(row=>myres.push(row.firstName))
                        res.json({
                            data: myres,
                            authData
                        })
                    })
                    .catch(err=>{
                        console.log("encountered error",err)
                    })
            }
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

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        console.log("no bearer token in verify token")
        res.sendStatus(403);
    }
}
module.exports = router;
