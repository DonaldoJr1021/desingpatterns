const express = require('express');
const routesPosts = express.Router();
const services = require('../services/index.services');
const handerls = require('../handlers/index.handlers');
const productHandlers = handerls('posts');

routesPosts.get('/posts', productHandlers(services).get);
routesPosts.post('/posts', productHandlers(services).post);
routesPosts.put('/post/:id', productHandlers(services).put);
routesPosts.delete('/posts/:id', productHandlers(services).delete);

module.exports = routesPosts;