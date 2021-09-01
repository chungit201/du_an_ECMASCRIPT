import mongoose from 'mongoose';
const postChema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxLength:200
    },
    img:{
        type:String,

    },
    desc:{
        type:String,
        require:true,
        maxLength:2000
    },
    date:{
        type: String
    }
},{timestamp:true});
module.exports = mongoose.model('Post',postChema);