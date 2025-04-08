const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        match: /^[a-zA-Z ]{2,15}$/,
        required : [true, 'Name is required.'],
    },
    email : {
        type : String,
        required : [true, 'Email is required.'],
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        validate: {
            validator: async function(v) {
              const email = await this.constructor.findOne({ email: v, deleted_at: null });
              return !email;
            },
            message: props => `The specified email is already in use.`
        }
    },
    mobile_number : {
        type : Number,
    },
    password : {
        type : String,
        required : [true, 'Password is required.'],
    },
    image : {
        type : String,
    },
    user_type : {
        type : String,
        enum : ['user', 'admin']
    },
    status : {
        type : Boolean,
        default : 1
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

const userModal = mongoose.model('users',userSchema);

module.exports = userModal;