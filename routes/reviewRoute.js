const express=require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router=express.Router();

router.post('/products/:id/rating',async (req,res)=>{
    try {
        // res.send(req.body)

        let { rating, comment } = req.body;
        const { id } = req.params;
        let product = await Product.findById(id);
        let review = new Review({rating, comment});
        product.reviews.push(review);
        await product.save();
        await review.save();
        res.redirect(`/products/${id}`);
    } catch (error) {
        console.log(`error in post-review router: ${error}`);
    }
    
})


module.exports=router