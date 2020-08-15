const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);