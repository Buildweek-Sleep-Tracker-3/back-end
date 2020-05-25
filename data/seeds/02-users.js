exports.seed = async function(knex) {
  await knex('users').insert([
    {id: 1, email: 'test@gmail.com', password: 'test_unhashed', name: 'Steven S', year_of_birth: '1993'}
  ]);
};
