const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required.'],
    },
    code : {
        type : String,
        required : [true, 'Code is required.'],
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

const colorModal = mongoose.model('color',colorSchema);

module.exports = colorModal;