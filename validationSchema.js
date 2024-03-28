const Joi = require('joi');

const productschema=Joi.object({
    name:Joi.string().min(2).required().trim(),
    price:Joi.number().min(0).required(),
    desc:Joi.string().min(3).trim(),
    img:Joi.string().min(3).trim()
});

const reviewSchema=Joi.object({
    rating:Joi.number().min(0).max(5),
    comment:Joi.string().min(3).trim()
});

module.exports={productschema,reviewSchema}