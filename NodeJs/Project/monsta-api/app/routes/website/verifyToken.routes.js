const express = require('express');
const { index } = require('../../controllers/website/verifyToken.controller');

const router = express.Router();

module.exports = server => {

    router.post('/',index);

    server.use('/api/website/verify-token',router);
}