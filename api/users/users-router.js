const router = require('express').Router()
const User = require('./users-model')
const { restricted } = require("../auth/auth-middlware")

//need to be able to edit a user profile

router.get('/', (req, res, next) => {
    User.get()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the users router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router