const request = require('supertest');
const server = require('../api/server');
const db = require('../data/config');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

afterAll(async () => {
    await db.destroy() // closes the database connection
});

test('POST /auth/register', async () => {
  const response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
  expect(response.status).toBe(201);
  expect(response.body).toMatchObject({
    username: 'johnny',
    department: 'buyer'
  });
});

test('POST /auth/login', async () => {
  var response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
   response = await request(server)
    .post('/auth/login')
    .send({
    username: 'johnny',
    password: 'dean'
    });
  expect(response.status).toBe(200);
});
