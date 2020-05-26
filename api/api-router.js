const express = require('express')
const router = express.Router()
const dao = require('./api-dao')

//TODO: req.decoded contains user ID; make sure you are grabbing only that USERS stuff when you do these routes

//GET all entries
router.get('/entries', async (req, res, next) => {
  const entries = await dao.getSleepEntries()
  res.status(200).json(entries)
})

//GET specific entry
router.get('/entries/:id', (req, res, next) => {
})

//POST new entry
router.post('/entries', (req, res, next) => {

})

//UPDATE specific entry
router.put('/entries/:id', (req, res, next) => {

})

//DELETE specific entry
router.delete('/entries/:id', (req, res, next) => {

})

//GET sleep summary
//TODO
router.get('/sleep', (req, res, next) => {
  res.status(200).json({
    message: 'TODO'
  })
})

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Sleep Tracker API. Please navigate to proper route. See documentation for further details.'
  })
})

module.exports = router