const express=require('express');
const Product = require('../models/Product');
const router=express.Router();

router.get('/products', async(req,res,next)=>{
    try{
        const products=await Product.find();
        res.render('products',{products});
    }catch(err){
        next(err," error in product route");
    }
});

router.get('/products/new',(req,res)=>{
    try {
        res.render('new');
    } catch (error) {
        console.log("error in /products/new route :",error)
    }
})

router.post('/products',async (req,res)=>{
    const {name,price,desc,img}=req.body;
    await Product.create({name,price,desc,img});//add the object in db automatically
    res.redirect('/products');

})

router.get('/products/:id', async (req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        // console.log(product)
        res.render('details',{product});
    } catch (error) {
        console.log("error in /products/:id route :",error)
    }
})


module.exports=router;