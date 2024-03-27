const mongoose=require('mongoose');

const reviewSchema= new mongoose.Schema({
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5
    },
    
    comment:{
        type:String,
        required:true,
        trim:true
    }
})

// makin a model
// model name should be a singular and always be start with capital leter
let Review=mongoose.model('Review',reviewSchema);

module.exports=Review;