const express = require('express');
const { register, login } = require('../../controllers/website/user.controller');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/users' })

const router = express.Router();

module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/users')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now();
            var imagepath = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix+imagepath)
        }
    })
    
    const uploadImage = multer({ storage: storage })

    var singleImage = uploadImage.single('image');

    router.post('/register', singleImage ,register);

    router.post('/login', upload.none() ,login);

    // router.post('/details/:id', upload.none() ,details);

    // router.put('/update/:id', upload.none() ,update);

    // router.post('/delete', upload.none() ,destroy);

    // router.post('/change-status', upload.none() ,changeStatus);

    server.use('/api/website/users' ,router);
}