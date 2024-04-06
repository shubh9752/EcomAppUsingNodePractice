const express=require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validationProduct } = require('../middleware');
const router=express.Router();

router.get('/products', async(req,res,next)=>{
    try{
        const products=await Product.find();
        res.render('products',{products});
    }catch(err){
        res.render("error",{err:err.message});
    }
});

router.get('/products/new',(req,res)=>{
    try {
        res.render('new');
    } catch (error) {
        res.render("error",{err:error.message});
    }
})

router.post('/products', validationProduct ,async (req,res)=>{
    const {name,price,desc,img}=req.body;
    await Product.create({name,price,desc,img});//add the object in db automatically
    req.flash('success','product added successfully')

    res.redirect('/products');

})

router.get('/products/:id', async (req,res)=>{
    try {
        // const product=await Product.findById(req.params.id);
        const product=await Product.findById(req.params.id).populate('reviews');//populate will give me the items of review (it will iterate on reviews) in simple words populate mere diye huye collection me jayega or sara data mujhe lakar dedega
        // console.log(product)
        res.render('details',{product ,success:req.flash('msg')});
    } catch (error) {
        console.log("error in /products/:id route :",error)
    }
})
router.get('/products/:id/edit',async (req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        // console.log(product)
        res.render('edit',{product});
    } catch (error) {
        console.log("error in /products/:id/edit route :",error)
    }
})

router.patch('/products/:id', validationProduct  ,async (req,res)=>{
    try {
        const {name,price,desc,img}=req.body;
        await Product.findByIdAndUpdate(req.params.id,{name,price,desc,img});
        req.flash('success','product edited successfully')
        res.redirect('/products');
        
    } catch (error) {
       console.log(error);
    }
  
})
router.delete('/products/:id',async (req,res)=>{
    // const {name,price,desc,img}=req.body;
    const product=await Product.findById(req.params.id);
    for(let ids of product.reviews){
        await Review.findByIdAndDelete(ids);
    }
    await Product.findByIdAndDelete(req.params.id);
    req.flash('success','product delete successfully')
    res.redirect('/products');
})


module.exports=router;