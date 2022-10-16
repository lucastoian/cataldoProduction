const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    items: [{
        id: {   type: mongoose.Schema.Types.ObjectId, ref: 'productvariants',}, 
        mainImg: {type: String},
        name: {type: String},
        size: {type: mongoose.Schema.Types.Mixed, required:true},
        brand: {type: String},
        category: {type: String},
        barcode: {type: String},
        quantity: {type: Number, required:true},
        
    }],
    shippingAddress1: {
        type: String,
        required: true
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: '',
    },
    prefix: {
        type: String,
        default: '',
    },
    fullNumber: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    email: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true,
    },
    paymentOption: {
        type: String,
        required: true,
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    }

})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
})
 
orderSchema.set('toJSON', {
    virtuals: true
})


exports.Order = mongoose.model('Order', orderSchema);