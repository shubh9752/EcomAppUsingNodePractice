const express=require('express');
const {server}=require('http');
const path= require('path');
const mongoose=require('mongoose');
const app=express();
const seedDB=require('./seed');
const productRoutes=require('./routes/productRoute')

mongoose.connect('mongodb://127.0.0.1:27017/ecomdb').then(()=>{
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.log('db not connected',err);
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));

// seedDB();

app.use(productRoutes);

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})