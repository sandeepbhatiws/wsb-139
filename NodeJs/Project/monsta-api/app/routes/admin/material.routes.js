const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../controllers/admin/material.controller');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

module.exports = server => {

    router.post('/add', upload.none() ,create);

    router.post('/view', upload.none() ,index);

    router.post('/details/:id', upload.none() ,details);

    router.put('/update/:id', upload.none() ,update);

    router.post('/delete', upload.none() ,destroy);

    router.post('/change-status', upload.none() ,changeStatus);

    server.use('/api/admin/materials' ,router);
}