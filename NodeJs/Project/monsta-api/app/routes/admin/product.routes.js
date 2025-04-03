const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../controllers/admin/product.controller');
const multer  = require('multer')
const path = require('path');
const upload = multer({ dest: 'uploads/products' })

const router = express.Router();

module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/products')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now();
          var imagepath = path.extname(file.originalname);
          cb(null, file.fieldname + '-' + uniqueSuffix+imagepath)
        }
    })

    const uploadImage = multer({ storage: storage })

    var singleImage = uploadImage.single('image');
    var multipleImages = uploadImage.array('images',6);
    const singleMultiple = uploadImage.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    router.post('/add', singleMultiple ,create);

    router.post('/view', upload.none() ,index);

    router.post('/details/:id', upload.none() ,details);

    router.put('/update/:id', singleMultiple ,update);

    router.post('/delete', upload.none() ,destroy);

    router.post('/change-status', upload.none() ,changeStatus);

    server.use('/api/admin/products',router);
}