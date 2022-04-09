const express = require('express');
const usersRouter = require('./users/users-router');
const authRouter = require("./auth/auth-router");
const itemsRouter = require("./items/items-router")

const server = express()

server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)

server.use('*', (req, res ) => {
    res.json({ api: 'up '})
})

module.exports = server