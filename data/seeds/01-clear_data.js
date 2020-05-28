
exports.seed = async function(knex) {
  await knex('sleep_entries').truncate()
  await knex('users').truncate()
};
