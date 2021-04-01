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

test('GET /items', async () => {

});
test('GET /items/:id', async () => {

});
test('POST /items/additem', async () => {

});
test('PUT /items/:id', async () => {

});
test('DELETE /items/:id', async () => {

});
test('GET /items/:category', async () => {

});