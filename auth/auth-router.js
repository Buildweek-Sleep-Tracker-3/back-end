const express = require('express')
const router = express.Router()
const dao = require('./auth-dao')

router.post('/register', async (req, res, next) => {
  try {
    //verify request body contains required fields
    const { email, name, year_of_birth, password } = req.body
    if(!email || !name || !year_of_birth || !password) {
      return res.status(400).json({
        message: `The following fields are required: 'email', 'name', 'password', 'year_of_birth'`
      })
    }

    //verify email is unique
    const emailExists = await dao.getUserByEmail(req.body.email)
    if(emailExists) {
      return res.status(400).json({
        message: 'Email address provided already exists.'
      })
    }

    //proceed with request
    const newUser = await dao.addUser(req.body)
    res.status(200).json(newUser)

  } catch (err) {
    next(err)
  }
})

router.post('/login', (req, res, next) => {

})

module.exports = router