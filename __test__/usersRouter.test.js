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
    const response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
    const login = await request(server)
        .post('/auth/login')
        .send({username: 'johnny', password: 'dean'});
    const users_request = await request(server)
        .get('/users')
        .set('authorization', login.body.token);
    expect(users_request.status).toBe(200);
});

test('GET /users/:id', async () => {
    const response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
    const login = await request(server)
        .post('/auth/login')
        .send({username: 'johnny', password: 'dean'});
    const users_request = await request(server)
        .get('/users/1')
        .set('authorization', login.body.token);
    expect(users_request.status).toBe(200);
});

test('GET /users/:id/items', async () => {
    const response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
    const login = await request(server)
        .post('/auth/login')
        .send({username: 'johnny', password: 'dean'});
    const users_request = await request(server)
        .get('/users/1/items')
        .set('authorization', login.body.token);
    expect(users_request.status).toBe(200);
});

test('DELETE /users/:id', async () => {
    const response = await request(server)
    .post('/auth/register')
    .send({
    username: 'johnny',
    password: 'dean',
    department: 'buyer'
    });
    const login = await request(server)
        .post('/auth/login')
        .send({username: 'johnny', password: 'dean'});
    const users_request = await request(server)
        .delete('/users/5')
        .set('authorization', login.body.token);
    expect(users_request.status).toBe(200);
});
