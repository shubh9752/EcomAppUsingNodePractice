// const mongoose=require('mongoose');
// const Product = require('./models/Product');

// const products=[
//     {name:"iphone 17",
//     img:"https://imgs.search.brave.com/NVbNxoFAbE4jWxv1GdYtSfSmI63GWyuS5d32ZyOVgLA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2NjZnRlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAzLzQtMy03Mjh4/NDcxLmpwZw",
//     price:500,
//     desc:"very cheap price"},
//     {name:"ipad",
//     img:"https://imgs.search.brave.com/mYXQvbGnqhsDxfl9o2krz_U1VPxtWa4wDzUzXoWOTFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVjZTcx/NTc0NTU3Nzk4M2Vj/NjkxYWY2Yy9tYXN0/ZXIvd18zMjAsY19s/aW1pdC9pUGFkLVBy/by0xMi05LShBcHBs/ZSkuanBn",
//     price:100,
//     desc:"sasta maal sate main"},
//     {name:"samsung galaxy",
//     img:"https://imgs.search.brave.com/1KZ9CunpOjV5KgGJyU6nl_fwRt8tIEt7fzsVQ0Hd6HQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxNnNkSzgxTm5M/LmpwZw",
//     price:1000,
//     desc:"very cool phone"},
// ]

// //we need to insertMany fuction to put all things of your model
// async function seedDB(){
//     try {
//        await Product.insertMany(products);
//        console.log("DB seeded successfully");
//     } catch (error) {
//         console.log("error in seedDB ", error);
//     }
// };

// module.exports=seedDB;