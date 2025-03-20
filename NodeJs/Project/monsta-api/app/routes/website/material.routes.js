const express = require('express');
const { index } = require('../../controllers/website/material.controller');

const router = express.Router();

module.exports = server => {

    router.post('/view',index);

    server.use('/api/website/materials',router);
}