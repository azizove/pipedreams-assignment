'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const cooksCollection = fastify.mongo.client.db('staff').collection('cooks')
    const cooks = await cooksCollection.find().toArray()
    return cooks
  })
  fastify.get('/:day', async function (request, reply) {
    const day = request.params.day.toLowerCase();
    const cooksCollection = fastify.mongo.client.db('staff').collection('cooks')
    const cook = await cooksCollection.findOne({ day })
    return cook
  })
}
