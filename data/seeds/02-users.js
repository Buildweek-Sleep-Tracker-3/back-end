exports.seed = async function(knex) {
  await knex('users').insert([
    {id: 1, email: 'admin', password: '$2b$14$kUponuSGjKD/161ROdkoqOJ0TpCoefks2y/Wpl4MR83CtW5NuUqmW', name: 'admin', year_of_birth: '1800'}
  ]);
};
