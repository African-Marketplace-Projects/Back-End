require('dotenv').config

const server = require("./api/server")

const port = process.env.PORT || 6000

server.listen(port, () => console.log(`api is running on port ${port}`))