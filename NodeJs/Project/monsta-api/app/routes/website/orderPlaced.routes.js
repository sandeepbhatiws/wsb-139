const express = require('express');
const { orderPlaced, updateStatus } = require('../../controllers/website/orderPlaced.controller');

const router = express.Router();

module.exports = server => {

    router.post('/',orderPlaced);

    router.post('/update-status/:order_id',updateStatus);

    server.use('/api/website/order-place',router);
}