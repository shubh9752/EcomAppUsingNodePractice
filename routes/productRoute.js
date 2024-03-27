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
router.get('/products/:id/edit',async (req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        // console.log(product)
        res.render('edit',{product});
    } catch (error) {
        console.log("error in /products/:id/edit route :",error)
    }
})

router.patch('/products/:id',async (req,res)=>{
    const {name,price,desc,img}=req.body;
    await Product.findByIdAndUpdate(req.params.id,{name,price,desc,img});
    res.redirect('/products');
})
router.delete('/products/:id',async (req,res)=>{
    // const {name,price,desc,img}=req.body;
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
})


module.exports=router;