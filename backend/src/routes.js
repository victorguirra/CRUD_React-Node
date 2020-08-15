const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World in Separate File');
})

module.exports = routes;