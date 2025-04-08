const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required.'],
    },
    image : {
        type : String,
        default : ''
    },
    slug : {
        type : String,
        default : ''
    },
    sub_category_id : {
        type : Array,
        ref: 'sub_categories'
    },
    sub_sub_category_id : {
        type : Array,
        ref: 'sub_sub_categories'
    },
    product_id : {
        type : Array,
        ref: 'products'
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

const parentCategoryModal = mongoose.model('parent_categories',parentCategorySchema);

module.exports = parentCategoryModal;