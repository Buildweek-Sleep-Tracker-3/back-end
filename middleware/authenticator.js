const jwt = require('jsonwebtoken')

async function authenticator(req, res, next) {
  try {
    //split token string 'Bearer: longtokenstring' into just the string
    let token = ''
    try {
      token = req.headers.authorization.split(" ")[1]
    } catch (err) {
      return res.status(400).json({
        message: 'Make sure to include proper authentication'
      })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid credentials'
        })
      }
      req.token = decoded
      next()
    })
  } catch (err) {
    next(err)
  }
}

module.exports = authenticator