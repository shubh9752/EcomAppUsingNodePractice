const mongoose=require('mongoose');

const passportLocalMongoose=require('passport-local-mongoose');

const UserSchema= new mongoose.Schema({

    // username
    // password  passport-local-mongoose handle
    email:{
        type:String,
        required:true,
        trim:true
    },
    // gender:{
    //     type:String,
    //     required:true,
    //     trim:true
    // }
  
})
UserSchema.plugin(passportLocalMongoose);

// makin a model
// model name should be a singular and always be start with capital leter
let User=mongoose.model('user',UserSchema);

module.exports=User;