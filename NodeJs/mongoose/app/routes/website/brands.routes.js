const express = require('express');
const { index } = require('../../controllers/website/brand.controller');

const router = express.Router();

module.exports = server => {

    router.post('/view',index);

    server.use('/api/website/brands',router);
}