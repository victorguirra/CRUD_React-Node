const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.get('/users', UserController.users);
routes.get('/users/:id', UserController.user)
routes.post('/users', UserController.create_user);
routes.put('/users/:id', UserController.update_user);
routes.delete('/users/:id', UserController.delete_user);

module.exports = routes;