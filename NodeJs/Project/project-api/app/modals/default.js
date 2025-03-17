const mongoose = require('mongoose');

const defaultSchema = new mongoose.Schema({
    name : {
        type : String,
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

const defaultModal = mongoose.model('default',defaultSchema);

module.exports = defaultModal;