const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
const port = process.env.PORT || 5000

const apiRouter = require('./api/api-router')
const authRouter = require('./auth/auth-router')

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(morgan('combined'))

server.use('/auth', authRouter)
server.use('/api', apiRouter)

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

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})