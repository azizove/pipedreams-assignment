"use strict";

const path = require("path");
const AutoLoad = require("@fastify/autoload");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/mongodb"), {
    forceClose: true,
    url: "mongodb://localhost:27017",
  });

  fastify.register(require("@fastify/cors"), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        origin: true,
      };

      callback(null, corsOptions);
    };
  });

  fastify.register(require("@fastify/swagger"), {});
  fastify.register(require("@fastify/swagger-ui"), {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Pipedreams assignment Documentation",
        description: "Pipedreams assignment Backend Documentation description",
        version: "0.1.0",
        contact: {
          name: "ABDEL-AZIZ EL OUARAK",
          url: "https://github.com/azizove/pipedreams-assignment",
          email: "az.elouarak@gmail.com",
        },
      },
      host: "127.0.0.1:3000",
      basePath: "",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
    uiConfig: {
      docExpansion: "none", // expand/not all the documentations none|list|full
      deepLinking: true,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: false,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
