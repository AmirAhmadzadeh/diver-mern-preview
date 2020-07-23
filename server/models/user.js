const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


const UserSchema = new Schema({
    name: {
       type : String  ,
       required:[true , "Name is required"],
       validate : {
          validator : (value) => value.length > 2  ,
          message  : "Longer Than 2 Please"
        }
    },

    username: {
       type : String  ,
       required:[true , "Name is required"],
       validate : {
          validator : (value) => value.length > 2  ,
          message  : "Longer Than 2 Please"
        }
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
} , { timestamps : true});

const User =  mongoose.model('users' ,  UserSchema )   ;

module.exports =   User  ;