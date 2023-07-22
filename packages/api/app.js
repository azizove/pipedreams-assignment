'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017',
  })

  fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        origin: true
      };
  
      callback(null, corsOptions)
    }
  })
  
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
