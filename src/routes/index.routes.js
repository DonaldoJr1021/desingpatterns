const express = require('express');
const routes = express.Router();
const services = require('../services/index.services');
const handerls = require('../handlers/index.handlers');

routes.get('/', handerls(services).get);
routes.post('/', handerls(services).post);
routes.put('/:id', handerls(services).put);
routes.delete('/:id', handerls(services).delete);

module.exports = routes;