const { route } = require('./customers');
const jwt = require('jsonwebtoken')

const router = require('express').Router();

router.post('/', (req, res) => {
    const user ={
        id:1,
        username: 'bharat',
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({token})
    })

});



module.exports = router;

