const jwt = require('jsonwebtoken')

async function authenticator(req, res, next) {
  try {
    const token = req.cookies.token
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