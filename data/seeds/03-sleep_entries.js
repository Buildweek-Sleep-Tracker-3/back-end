exports.seed = async function(knex) {
  await knex('sleep_entries').insert([
    {id: 1, date: '2020-04-20 00:00:00', sleep_start: '2020-04-20 22:15:00', sleep_end: '2020-04-21 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 2, date: '2020-04-21 00:00:00', sleep_start: '2020-04-21 22:00:00', sleep_end: '2020-04-22 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 3, date: '2020-04-22 00:00:00', sleep_start: '2020-04-22 22:15:00', sleep_end: '2020-04-23 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 4, date: '2020-04-23 00:00:00', sleep_start: '2020-04-23 22:15:00', sleep_end: '2020-04-24 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 5, date: '2020-04-24 00:00:00', sleep_start: '2020-04-24 22:15:00', sleep_end: '2020-04-25 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 6, date: '2020-04-25 00:00:00', sleep_start: '2020-04-25 22:15:00', sleep_end: '2020-04-26 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 7, date: '2020-04-26 00:00:00', sleep_start: '2020-04-26 22:15:00', sleep_end: '2020-04-27 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 8, date: '2020-04-27 00:00:00', sleep_start: '2020-04-27 22:15:00', sleep_end: '2020-04-28 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 9, date: '2020-04-28 00:00:00', sleep_start: '2020-04-28 22:15:00', sleep_end: '2020-04-29 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 10, date: '2020-04-29 00:00:00', sleep_start: '2020-04-29 22:15:00', sleep_end: '2020-04-30 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 11, date: '2020-04-30 00:00:00', sleep_start: '2020-04-30 22:15:00', sleep_end: '2020-05-01 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 12, date: '2020-05-01 00:00:00', sleep_start: '2020-05-01 22:15:00', sleep_end: '2020-05-02 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 13, date: '2020-05-02 00:00:00', sleep_start: '2020-05-02 22:15:00', sleep_end: '2020-05-03 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 14, date: '2020-05-03 00:00:00', sleep_start: '2020-05-03 22:15:00', sleep_end: '2020-05-04 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 15, date: '2020-05-04 00:00:00', sleep_start: '2020-05-04 22:15:00', sleep_end: '2020-05-05 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 16, date: '2020-05-05 00:00:00', sleep_start: '2020-05-05 22:15:00', sleep_end: '2020-05-06 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 17, date: '2020-05-06 00:00:00', sleep_start: '2020-05-06 22:15:00', sleep_end: '2020-05-07 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 18, date: '2020-05-07 00:00:00', sleep_start: '2020-05-07 22:15:00', sleep_end: '2020-05-08 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 19, date: '2020-05-08 00:00:00', sleep_start: '2020-05-08 22:15:00', sleep_end: '2020-05-09 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 20, date: '2020-05-09 00:00:00', sleep_start: '2020-05-09 22:15:00', sleep_end: '2020-05-10 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 21, date: '2020-05-10 00:00:00', sleep_start: '2020-05-10 22:15:00', sleep_end: '2020-05-11 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 22, date: '2020-05-11 00:00:00', sleep_start: '2020-05-11 22:15:00', sleep_end: '2020-05-12 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 23, date: '2020-05-12 00:00:00', sleep_start: '2020-05-12 22:15:00', sleep_end: '2020-05-13 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 24, date: '2020-05-13 00:00:00', sleep_start: '2020-05-13 22:15:00', sleep_end: '2020-05-14 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 25, date: '2020-05-14 00:00:00', sleep_start: '2020-05-14 22:15:00', sleep_end: '2020-05-15 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 26, date: '2020-05-15 00:00:00', sleep_start: '2020-05-15 22:15:00', sleep_end: '2020-05-16 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 27, date: '2020-05-16 00:00:00', sleep_start: '2020-05-16 22:15:00', sleep_end: '2020-05-17 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 28, date: '2020-05-17 00:00:00', sleep_start: '2020-05-17 22:15:00', sleep_end: '2020-05-18 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 29, date: '2020-05-18 00:00:00', sleep_start: '2020-05-18 22:15:00', sleep_end: '2020-05-19 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 30, date: '2020-05-19 00:00:00', sleep_start: '2020-05-19 22:15:00', sleep_end: '2020-05-20 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'},
    {id: 31, date: '2020-05-20 00:00:00', sleep_start: '2020-05-20 22:15:00', sleep_end: '2020-05-21 06:30:00', sleep_score_morning: '4', sleep_score_night: '4', sleep_score_day: '2', user_id: '1'}
  ]);
};