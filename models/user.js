const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// const { objectDirection } = require('three/tsl');
const userSchema =new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    wishlist:[
        {
            type: String
        }
    ],
    cart:[
        {
            type: String
        }
    ],
    address:[
        {
            fullname:{
                type: String,
                required: true
            },
            mobile:{
                type: Number,
                required: true
            },
            pincode:{
                type: Number,
                required: true
            },
            flat:{
                type: String,
                required: true
            },
            village:{
                type: String,
                required: true
            },
            city:{
                type: String,
                required: true
            },
            state:{
                type: String,
                required: true
            }
        }
    ],
    orders:[
        {
            productId:{
                type: String,
                required: true
            },
            arrivingAt:{
                type: String,
                required: true
            },
            orderedAt:{
                type: Date,
                default: Date.now(),
            },
            arrivingTo:{
                type: Object,
                required:true
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ]


});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);