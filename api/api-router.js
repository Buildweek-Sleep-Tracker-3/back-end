const express = require('express')
const router = express.Router()
const dao = require('./api-dao')

//GET all entries
router.get('/entries', async (req, res, next) => {
  try {
    const { user_id } = req.token
    const entries = await dao.getSleepEntries(user_id)
    res.status(200).json(entries)
  } catch (err) {
    next(err)
  }
})

//GET hours of sleep
router.get('/entries/summary', async (req, res, next) => {
  try {
    const { user_id } = req.token
    const allEntries = await dao.getSleepEntriesWeek(user_id)
    console.log(allEntries)
  } catch (err) {
    next(err)
  }
})

//GET specific entry
router.get('/entries/:id', async (req, res, next) => {
  try {
    const { user_id } = req.token
    const { id } = req.params
    const result = await dao.getSleepEntryById(user_id, id)
    if (!result) {
      return res.status(404).json({
        message: 'Sleep entry with that ID was not found, or not authorized for current user'
      })
    }
    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

//POST new entry
router.post('/entries', async (req, res, next) => {
  try {
    const payload = {
      date: req.body.date,
      sleep_start: req.body.sleep_start,
      sleep_end: req.body.sleep_end,
      sleep_score_morning: req.body.sleep_score_morning,
      sleep_score_day: req.body.sleep_score_day,
      sleep_score_night: req.body.sleep_score_night,
      user_id: req.token.user_id
    }

    //check for existence of values for each key/value
    for (const key in payload) {
      if (payload[key] === undefined || payload[key] === '') {
        return res.status(400).json({
          message: `The following fields are required: 'date', 'sleep_start', 'sleep_end', 'sleep_score_morning', 'sleep_score_day', 'sleep_score_night'`
        })
      }
    }
    const [ newId ] = await dao.newSleepEntry(payload)
    res.status(200).json(newId)
  } catch (err) {
    next(err)
  }
})

//UPDATE specific entry
router.put('/entries/:id', async (req, res, next) => {
  try {
    const { user_id } = req.token
    const { id } = req.params
    const currentEntry = await dao.getSleepEntryById(user_id, id)
    if (!currentEntry) {
      return res.status(404).json({
        message: 'Sleep entry with that ID was not found, or not authorized for current user'
      })
    }
    
    //build payload object, only accepting values that exist in the database
    const allowedValues = Object.keys(currentEntry)
    //dirty because it would let the user change the user_id or id
    let payload = {}
    for (const key in req.body) {
      if(allowedValues.indexOf(key) > -1) {
        payload = {
          ...payload,
          [key]: req.body[key]
        }
      }
    }
    //overwrite payload 'id' and 'user_id' to initial values (to prevent user from being able to change these)
    payload.id = id
    payload.user_id = user_id

    const updated = await dao.updateEntry(user_id, id, payload)
    if(updated) {
      res.status(200).json(await dao.getSleepEntryById(user_id, id))
    } else {
      res.status(400).json({
        message: 'Something was wrong with your request'
      })
    }
  } catch (err) {
    next(err)
  }
})

//DELETE specific entry
router.delete('/entries/:id', async (req, res, next) => {
  try {
    const { user_id } = req.token
    const { id } = req.params
    const deletedEntry = await dao.deleteEntry(user_id, id)
    if(deletedEntry) {
      res.sendStatus(204)
    } else {
      res.status(404).json({
        message: 'Sleep entry ID does not exist, or not authorized for current user'
      })
    }
  } catch (err) {
    next(err)
  }
})


//GET sleep summary
//TODO: build logic for full sleep analysis
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