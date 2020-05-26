const db = require('../data/config')

function getSleepEntries(user_id) {
  return db('sleep_entries')
    .where({ user_id })
}

function getSleepEntryById(user_id, id) {
  return db('sleep_entries')
    .where({ user_id, id })
    .first()
}

function newSleepEntry(payload) {
  return db('sleep_entries')
    .insert(payload)
}

function deleteEntry(user_id, id) {
  return db('sleep_entries')
    .where({ user_id, id })
    .del()
}

function updateEntry(user_id, id, payload) {
  return db('sleep_entries')
    .where({ user_id, id })
    .update(payload)
}

module.exports = {
  getSleepEntries,
  getSleepEntryById,
  newSleepEntry,
  deleteEntry,
  updateEntry
}