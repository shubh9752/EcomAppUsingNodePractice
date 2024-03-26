const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0,
        trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
    }
})

// makin a model
// model name should be a singular and always be start with capital leter
let Product=mongoose.model('Product',productSchema);

module.exports=Product;