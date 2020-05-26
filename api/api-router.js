const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Sleep Tracker API. Please navigate to proper route. See documentation for further details.'
  })
})

module.exports = router