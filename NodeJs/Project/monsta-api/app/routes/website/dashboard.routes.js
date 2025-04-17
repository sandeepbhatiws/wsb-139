const express = require('express');
const { index } = require('../../controllers/website/dashboard.controller');

const router = express.Router();

module.exports = server => {

    router.post('/',index);

    server.use('/api/website/dashboard',router);
}