const express=require('express');
const User = require('../models/User');
const passport = require('passport');

const router=express.Router();


router.get('/register' , (req,res)=>{
    res.render('signUp');
});

router.post('/register' , async (req,res)=>{
    let { username , password , email } = req.body;
    console.log(username,password,email);
    let user = new User({ username , email});
    let newUser = await User.register(user , password);
    res.render('signin');
})

router.get('/signin' , (req,res)=>{
    res.render('signin');
})

router.post('/signin',
  passport.authenticate('local', 
  { 
    failureRedirect: 'signin', 
    failureMessage: true 
  }),
  function(req, res) {
    req.flash('success' , 'Welcome Back')
    res.redirect('/products');
});

router.get('/signin' , (req,res)=>{
    req.logout(()=>{
        req.flash('success' , 'Logged out successfully')
        res.redirect('signin');
    });
})

module.exports=router