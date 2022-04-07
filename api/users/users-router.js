const router = require('express').Router()
const User = require('./users-model')


router.get('/:id', (req, res, next) => {
    User.getUser(req.params.id)
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