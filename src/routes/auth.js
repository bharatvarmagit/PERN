const { route } = require('./customers');
const jwt = require('jsonwebtoken')

const router = require('express').Router();

router.post('/', verifyToken, (req, res) => {
    const user ={
        id:1,
        username: 'bharat',
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({token})
        req
    })

});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendStatus(403)
    }
}

module.exports = router;
module.exports.verifyToken = verifyToken;
