const jwt = require('jsonwebtoken')

async function authenticator(req, res, next) {
  try {
    //split token string 'Bearer: longtokenstring' into just the string
    const token = req.headers.authorization.split(" ")[1]
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