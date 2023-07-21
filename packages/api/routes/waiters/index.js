'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const waitersCollection = fastify.mongo.client.db('staff').collection('waiters')
    const waiters = await waitersCollection.find().toArray()
    return waiters
  })
  fastify.get('/:day', async function (request, reply) {
    const day = request.params.day
    const waitersCollection = fastify.mongo.client.db('staff').collection('waiters')
    const waiter = await waitersCollection.findOne({ day })
    return waiter
  })
}
