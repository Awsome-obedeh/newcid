const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  let userId;

  it('should create a new user', async () => {
    const res = await request(app).post('/users').send({ name: 'Alice' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Alice');
    userId = res.body.id;
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should update a user', async () => {
    const res = await request(app).put(`/users/${userId}`).send({ name: 'Bob' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Bob');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete(`/users/${userId}`);
    expect(res.statusCode).toBe(204);
  });
});
