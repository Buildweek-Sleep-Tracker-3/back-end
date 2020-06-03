const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authenticator = require('./middleware/authenticator')

const server = express()
const port = process.env.PORT || 5000

const apiRouter = require('./api/api-router')
const authRouter = require('./auth/auth-router')

const logger = (req, res, next) => {
  console.log("COUNTRY:", req.header('CF-IPCountry'), "Real IP:", req.header('CF-Connecting-IP'), "IP:", req.ip, "METHOD:", req.method, "PATH:", req.url)
  next()
}

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(logger)

server.use('/auth', authRouter)
server.use('/api', authenticator, apiRouter)

//Default response
server.use((req, res) => {
  res.status(200).json({
    message: 'Please navigate to proper route.'
  })
})

//Error logging
server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: 'Something went wrong'
  })
})

if (!module.parent) {
  server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
  })
}

module.exports = server