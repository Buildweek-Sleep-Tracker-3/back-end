# Sleep Tracker API

## Authentication
`POST /auth/register` - takes payload
```
{
  email,
  name,
  password,
  year_of_birth
}
```

Email must be unique.

All fields are required for successful registration.

`POST /auth/login` - takes payload
```
  email,
  password
```

Responds with Set-Cookie header that includes a JWT. This must be included in subsequent requests to access protected routes.

## Routes

`GET /api/entries` - responds with an array of all sleep entries for the currently logged in user.

`GET /api/entries/:id` - responds with a specific sleep entry based on URL parameters

`POST /api/entries` - create a new `sleep_entry`. Takes payload (all fields required): 

```
  date,
  sleep_start,
  sleep_end,
  sleep_score_morning,
  sleep_score_day,
  sleep_score_night
```

`PUT /api/entries/:id` - updates an existing sleep entry based on URL parameter. Takes the same payload as POST (above), but only needs to include the fields you want to update. 

`DELETE /api/entries/:id` - deletes the specified sleep entry.

## Schema
```
sleep_entries
---------------------
id - unique ID for that entry
date - date for that night of sleep
sleep_start - datetime for sleep start time
sleep_end - datetime for sleep end time
sleep_score_morning - 1 to 5 score of sleep quality in the morning
sleep_score_night - 1 to 5 score of sleep quality in the evening 
sleep_score_day - 1 to 5 score of sleep quality in the day
user_id - unique ID for the logged in user
----------------------
```

## Environment variables
```
  PORT= defaults to 5000 if not provided
  DB_ENVIRONMENT= 'development' for sqlite3 or 'production' for postgres
  JWT_SECRET=
```