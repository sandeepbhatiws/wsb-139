const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../controllers/admin/parentCategory.controller');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/categroies' })

const router = express.Router();

module.exports = server => {

    // var singleImage = upload.single('image');
    // var multipleImages = upload.array('images',6);
    // var singleMultiple = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '/uploads/categroies')
        },
        filename: function (req, file, cb) {
            // console.log(file);
            // console.log(req);
          const uniqueSuffix = Date.now();
          cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
      
    const uploadImage = multer({ storage: storage })

    var singleImage = uploadImage.single('image');
    var multipleImages = uploadImage.array('images',6);
    const singleMultiple = uploadImage.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    router.post('/add', singleMultiple ,create);

    router.post('/view', upload.none() ,index);

    router.post('/details/:id', upload.none() ,details);

    router.put('/update/:id', upload.none() ,update);

    router.post('/delete', upload.none() ,destroy);

    router.post('/change-status', upload.none() ,changeStatus);

    server.use('/api/admin/parent-categories',router);
}