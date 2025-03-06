const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 3,
        maxLength : 15,
        required : [true, 'Name is required.'],
    },
    status : {
        type : Boolean,
        default : 1
    },
    order : {
        type : Number,
        default : 0
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    },
});

const brandModal = mongoose.model('brand',brandSchema);

module.exports = brandModal;