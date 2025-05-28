const mongoose = require('mongoose');
const { ref } = require('process');
const Review = require('./review.js');

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    discount: Number,
    additionalInformation: String,
    aboutThisItem: String,
    productDetails: Object,
    review:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        },
    ]
    // review:[
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Review",
    //     }
    // ]
});
const listing = mongoose.model("listing",listingSchema);
module.exports=listing;