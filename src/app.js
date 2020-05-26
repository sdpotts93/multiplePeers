const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const http = require('http')

//////// CONFIGURATION ///////////

const port = process.env.PORT || 3000

////////////////////////////

require('./routes')(app)

const httpServer = http.createServer()
const io = require('socket.io')(httpServer)
require('./socketController')(io)


httpServer.listen(port, () => {
    console.log('listening on port 3000')
})
