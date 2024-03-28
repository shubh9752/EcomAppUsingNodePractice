const {productschema,reviewSchema} = require('./validationSchema');

const validationProduct=(req,res,next)=>{
    let {name,price,desc,img}=req.body;
    const {error}=productschema.validate({name,price,desc,img});
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        
        return res.render('error',{err:msg});
    }else{
        next();
    }
};
const validationReview=(req,res,next)=>{
    let { rating, comment } = req.body;
    const {error}=reviewSchema.validate({rating, comment});
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        
        return res.render('error',{err:msg});
    }else{
        next();
    }

};

module.exports={validationProduct,validationReview};