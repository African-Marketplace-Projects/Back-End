const express = require('express');
const usersRouter = require('./users/users-router')

const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)

router.use('*', (req, res ) => {
    res.json({ api: 'up '})
})

module.exports = server