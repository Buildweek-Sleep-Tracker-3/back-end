const express = require('express')
const router = express.Router()
const dao = require('./auth-dao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    const emailExists = await dao.getUserByEmail(email)
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

router.post('/login', async (req, res, next) => {
  try {
    //verify email & password were sent
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'Must include a username and password'
      })
    }
    //verify user exists
    const user = await dao.getUserByEmail(email)
    if(!user) {
      return res.status(400).json({
        message: 'Invalid username or password'
      })
    }
    //check password is valid
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {
      return res.status(400).json({
        message: 'Invalid username or password'
      })
    }

    const token = await jwt.sign({ user_id: user.id }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
      message: `Welcome, ${email}`
    })

  } catch (err) {
    next(err)
  }
})

module.exports = router