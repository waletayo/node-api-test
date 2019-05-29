import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
}, {timestamp: true});


const product = mongoose.model('product', ProductSchema, 'Product');
module.exports = product;