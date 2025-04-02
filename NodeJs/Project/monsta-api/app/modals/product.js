const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required.'],
    },
    code : {
        type : String,
        default : ''
    },
    image : {
        type : String,
        default : ''
    },
    price : {
        type : Number,
        default : 0
    },
    discount_price : {
        type : Number,
        default : 0
    },
    color_id : [{
        type : Array,
        ref: 'colors'
    }],
    material_id : [{
        type : Array,
        ref: 'materials'
    }],
    parent_category_id : [{
        type : Array,
        ref: 'parent_categories'
    }],
    sub_category_id : [{
        type : Array,
        ref: 'sub_categories'
    }],
    sub_sub_category_id : [{
        type : Array,
        ref: 'sub_sub_categories'
    }],
    is_new_arrival : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    is_featured : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    is_on_sale : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    is_best_selling : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    is_top_rated_products : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    is_upsell : {
        type : Boolean,
        default : false // 0 - No 1 - Yes
    },
    short_description : {
        type : String,
        default : ''
    },
    estimate_delivery_days : {
        type : String,
        default : ''
    },
    dimension_length : {
        type : String,
        default : ''
    },
    dimension_height : {
        type : String,
        default : ''
    },
    dimension_width : {
        type : String,
        default : ''
    },
    description : {
        type : String,
        default : ''
    },
    multiple_images : [{
        type : Array,
        default : []
    }],
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

const modal = mongoose.model('products',schema);

module.exports = modal;