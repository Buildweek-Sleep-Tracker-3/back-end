const db = require('../data/config')
const bcrypt = require('bcrypt')

async function addUser(payload) {
  const hash = await bcrypt.hash(payload.password, 14)

  const newUser = {
    email: payload.email,
    name: payload.name,
    year_of_birth: payload.year_of_birth,
    password: hash
  }

  const [ id ] = await db('users')
    .insert(newUser)

  return getUserById(id)

}

function getUserById(id) {
  return db('users')
    .where({ id })
    .select('id')
    .first()
}

function getUserByEmail(email) {
  return db('users')
  .where({ email })
  .select('id', 'password')
  .first()
}

module.exports = {
  addUser,
  getUserById,
  getUserByEmail
}