const { route } = require('./customers');
const jwt = require('jsonwebtoken')

const router = require('express').Router();

router.post('/signin', (req, res) => {
    const user ={
        id:1,
        username: 'bharat',
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({token})
    })
});

router.post('/signup', (req, res) => {
    res.send("signed up !")
})



module.exports = router;

