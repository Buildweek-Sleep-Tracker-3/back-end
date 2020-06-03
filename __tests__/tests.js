const request = require('supertest')
const server = require('../index')
const db = require('../data/config')

afterAll(async () => {
  await db.destroy()
})

describe('main server API', () => {

  let token = '' //token we use throughout testing (we receive it from the POST /auth/login endpoint)
  let entryId = '' //set the entry ID used for the tests

  describe('main route (GET /)', () => {
    it('should respond properly', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/')

      expect(response.status).toEqual(expectedStatusCode)
      expect(response.type).toEqual('application/json')
      expect(response.body).toEqual({ message: 'Please navigate to proper route.' })
    })
  })

  describe('signup route (POST /auth/register)', () => {
    it('should take a user payload and respond with a new user ID', async () => {
      const newUser = {
        email: "testing1",
        name: "Mike Jones",
        password: "admin",
        year_of_birth: "1990"
      }

      //delete the user we're about to add first
      await db("users").where("email", newUser.email).del()

      const expectedStatusCode = 200;

      const response = await request(server).post('/auth/register').send(newUser)

      expect(response.status).toEqual(expectedStatusCode)
      expect(response.body).toHaveProperty('id')
    })
  })

  describe('login route (POST /auth/login)', () => {
    it('should take a username/pass and respond with a JWT', async () => {
      const user = {
        email: "testing1",
        password: "admin"
      }

      const response = await request(server).post('/auth/login').send(user)

      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('token')
      token = response.body.token
    })
  })

  describe('GET /api (authentication works)', () => {
    it('returns a valid response', async () => {
      const response = await request(server).get('/api').set({ "Authorization": `Bearer ${token}` })

      expect(response.status).toEqual(200)
    })
  })

  describe('POST /api/entries', () => {
    it('accepts a new user payload and responds with the new ID', async () => {
      const entry = {
        date: '5/15/2020',
        sleep_start: '5/16/2020',
        sleep_end: '5/16/2020',
        sleep_score_morning: '5',
        sleep_score_day: '3',
        sleep_score_night: '5'
      }

      const response = await request(server).post('/api/entries').set({ "Authorization": `Bearer ${token}` }).send(entry)

      expect(response.status).toEqual(200)
      entryId = response.body
    })
  })

  describe('GET /api/entries', () => {
    it('responds with an array of entries for user', async () => {
      const response = await request(server).get('/api/entries').set({ "Authorization": `Bearer ${token}` })

      expect(response.status).toEqual(200)
      expect(response.body).toHaveLength(1)
    })
  })

  describe('GET specific entry /api/entries/:id', () => {
    it('responds with the correct object', async () => {
      const response = await request(server).get(`/api/entries/${entryId}`).set({ "Authorization": `Bearer ${token} `})

      expect(response.status).toEqual(200)
      expect(response.body.date).toEqual('5/15/2020')
      expect(response.body.sleep_score_day).toEqual(3)
    })
  })

  describe('PUT specific entry /api/entries/:id', () => {
    it('response with an updated object', async () => {
      const entry = {
        date: '5/16/2020',
        sleep_start: '5/17/2020',
        sleep_end: '5/17/2020',
        sleep_score_morning: 4,
        sleep_score_night: 4,
        sleep_score_day: 4
      }

      const response = await request(server).put(`/api/entries/${entryId}`).set({ "Authorization": `Bearer ${token} `}).send(entry)

      expect(response.status).toEqual(200)
      expect(response.body).toMatchObject(entry)
    })
  })

  describe('DELETE specific entry /api/entries/:id', () => {
    it('responds with no content and object no longer exists', async () => {
      const response = await request(server).del(`/api/entries/${entryId}`).set({ "Authorization": `Bearer ${token}` })

      expect(response.status).toEqual(204)

      const deletedId = await request(server).get(`/api/entries/${entryId}`).set({ "Authorization": `Bearer ${token}`} )

      expect(deletedId.status).toEqual(404)
    })
  })
})