const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required.'],
    },
    parent_category_id : {
        type : String,
        required : [true, 'Parent category is required.'],
        ref: 'parent_categories'
    },
    image : {
        type : String,
        default : ''
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

const subCategoryModal = mongoose.model('sub_categories',subCategorySchema);

module.exports = subCategoryModal;