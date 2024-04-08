const express=require('express');
const {server}=require('http');
const path= require('path');
const mongoose=require('mongoose');
const app=express();
const seedDB=require('./seed');
const productRoutes=require('./routes/productRoute');
const reviewsRoutes=require('./routes/reviewRoute');
const authRoutes=require('./routes/auth')
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport'); //pass
const LocalStrategy = require('passport-local'); //pass
const User = require('./models/User'); //pass

let configSession={
    secret: 'your-secret-key', // Change this to a secret key of your choice
    resave: false,
    saveUninitialized: false
};


 
// override with POST having ?_method=DELETE


mongoose.connect('mongodb://127.0.0.1:27017/ecomdb').then(()=>{
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.log('db not connected',err);
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(session(configSession));
app.use(flash());  //flash is dependent on session

// use static serialize and deserialize of model for passport session support
app.use(passport.initialize()); //pass
app.use(passport.session()); //pass
passport.serializeUser(User.serializeUser()); //pass
passport.deserializeUser(User.deserializeUser()); //pass

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate())); //pass

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})

// seedDB();

app.use(productRoutes);
app.use(reviewsRoutes);
app.use(authRoutes);

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})