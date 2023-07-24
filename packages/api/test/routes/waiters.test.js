const Fastify = require('fastify');
const {MongoMemoryServer} = require('mongodb-memory-server');
const supertest = require('supertest');
const WaitersRoute = require('../../routes/waiters/index');
const tap = require('tap');

tap.test('Waiters Route - GET /', async (t) => {
  let server;
  let mongod;
  let request;

  t.beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const connectionString = await mongod.getUri();
    server = Fastify();
    server.register(require('@fastify/mongodb'), { url: connectionString });

    // Register the route handlers
    server.register(WaitersRoute);

    await server.ready();

    // Create a request instance to test the routes
    request = supertest(server.server);
  });

  t.afterEach(async () => {
    await server.close();
    await mongod.stop();
  });

  t.test('should return an array of waiters', async (t) => {
    const response = await request.get('/');

    t.equal(response.status, 200);
  });

  t.test('should return a cook for a specific day', async (t) => {
    // Assuming there is a cook for 'monday' in the database
    const response = await request.get('/monday');

    t.equal(response.status, 200);
  });
});
