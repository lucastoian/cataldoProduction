const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
      type: String,
      default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    userName:{
       type: String,
       default: ''
    },
    email:{
        type: String,
        required: true
    }, 
    passwordHash: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        default: ''
    },
    isAdmin: {
            type: Boolean,
            default: false,
        },
    street: {
            type: String,
            default: ''
        },
    apartment: {
            type: String,
            default: ''
        },
    zip: {
            type: String,
            default: ''
        },
    city: {
            type: String,
            default: ''
        },
    country: {
            type: String,
            default: ''
        },
        address1: {
            type: String,
            default: ''
        },
        address2: {
            type: String,
            default: ''
        },
        dateOfBirth: {
            type: String,
            default: ''
        },
        postalCode: {
            type: String,
            default: ''
        },
        gender: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },
        region: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: ''
        }
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
})
userSchema.set('toJSON', {
    virtuals: true
})


exports.User = mongoose.model('User', userSchema);