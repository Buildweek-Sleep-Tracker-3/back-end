const db = require('../data/config')

function getSleepEntries() {
  return db('sleep_entries')
    .select('*')
}

module.exports = {
  getSleepEntries
}