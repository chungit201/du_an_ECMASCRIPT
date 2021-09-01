import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const productSchema = mongoose.Schema({
    name:{
        type: String,
        strim:true,
        maxLength:32,
        required :true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    description:{
        type: String,
        required :true,
        maxLength:2000,    
    },
    price:{
        type:Number
    },
    oldprice:{
        type:Number
    },
    img:{
        type: String,
    },
    quantity: {
        type: Number,
    },
    status:{
        type:Boolean
    }
    // shipping:{
    //     required:true,
    //     type:Boolean
    // },
    // sold:{
    //     type:Number,
    //     default:0
    // }

},{timestamps:true});
module.exports = mongoose.model("Product",productSchema)