const express = require('express');
const routes = express.Router();
const services = require('../services/index.services');
const handerls = require('../handlers/index.handlers');
const userHandlers = handerls('users');

routes.get('/', userHandlers(services).get);
routes.post('/', userHandlers(services).post);
routes.put('/:id', userHandlers(services).put);
routes.delete('/:id', userHandlers(services).delete);

module.exports = routes;