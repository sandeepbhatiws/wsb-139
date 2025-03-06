const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../controllers/admin/brand.controller');

const router = express.Router();

module.exports = server => {

    router.post('/add',create);

    router.post('/view',index);

    router.post('/details/:id',details);

    router.put('/update/:id',update);

    router.delete('/delete/:id',destroy);

    router.post('/change-status',changeStatus);

    server.use('/api/admin/brands',router);
}