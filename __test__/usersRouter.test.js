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

test('GET /users', async () => {

});
test('GET /users/:id', async () => {

});
test('GET /users/:id/items', async () => {

});
test('DELETE /users/:id', async () => {

});
