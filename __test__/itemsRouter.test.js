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
    const items_request = await request(server)
        .get('/items')
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(200);
});

test('GET /items/:id', async () => {
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
    const items_request = await request(server)
        .get('/items/1')
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(200);
});

test('POST /items/additem', async () => {
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
    const items_request = await request(server)
        .post('/items/addItem').send({name: "yo gabba"})
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(201);
});

test('PUT /items/:id', async () => {
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
    const items_request = await request(server)
        .put('/items/1').send({name: "Nyeri Hill Estate Coffee",
        description: "This meticulously prepared East African coffee is famous for its rich body, pleasant, vibrant acidity, fragrant aroma, and winy aftertaste with overtones of berries and citrus. Kenyan coffee is commonly described as having an almost sweet taste accompanied by wine-like or fruity overtones. They are well-known all over the world and sought after for their bold, intense, full-bodied flavors accompanied by overtones of berry, citrus fruits, and mild floral fragrances.  It produces a light flavour, with notes of raspberry, cranberry, fresh-cut redwood, and alyssum-like flowers",
        price: 56,
        location: "Kiambu Kenya",
        category: "coffee",
        URL: null,
        user_id: 1})
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(201);
});

test('DELETE /items/:id', async () => {
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
    const items_request = await request(server)
        .delete('/items/2')
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(200);
});

test('GET /items/:category', async () => {
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
    const items_request = await request(server)
        .get('/items/category/Coffee')
        .set('authorization', login.body.token);
    expect(items_request.status).toBe(200);
});
