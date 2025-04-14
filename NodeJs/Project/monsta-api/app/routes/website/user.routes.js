const express = require('express');
const { register, login, viewProfile, updateProfile, changePassword, forgotPassword, resetPassword } = require('../../controllers/website/user.controller');
const multer  = require('multer');
const path  = require('path');
const { verifyToken } = require('../../middleware/website/verifyToken.middleware');
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

    router.post('/view-profile', verifyToken, upload.none() ,viewProfile);

    router.put('/update-profile', verifyToken, singleImage ,updateProfile);

    router.put('/change-password', verifyToken, upload.none() ,changePassword);

    router.post('/forgot-password', upload.none() ,forgotPassword);

    router.post('/reset-password', upload.none() ,resetPassword);

    server.use('/api/website/users' ,router);
}