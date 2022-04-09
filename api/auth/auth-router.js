const router = require('express').Router();
const {checkUsernameExists, checkIfValid} = require('./auth-middlware')
const { JWT_SECRET } = require('../secrets')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../users/users-model')

router.post('/register', checkIfValid, checkUsernameExists, (req, res, next) => {
    const {user_id, username, password, business_name} = req.body
    const hash = bcrypt.hashSync(password, 8)
    User.addUser({user_id, username, password: hash, business_name})
      .then(newUser => {
        res.status(201).json({
            user_id: newUser.user_id,
            username: newUser.username,
            password: newUser.password,
            business_name: newUser.business_name
        })
      })
      .catch(err => {
        next(err)
      })
    });

router.post('/login', checkIfValid, (req, res, next) => {
    let { username, password } = req.body

    User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = buildToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token,
        })
      } else {
        next({ status: 401, message: 'invalid Credentials' })
      }
    })
    .catch(next)
});

function buildToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router