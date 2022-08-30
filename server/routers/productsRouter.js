
const express = require("express");
const productsBL = require('../BL/productsBL');
//const productsBL = require("../BL/productsBL");
const router = express.Router();
const fastify = require('fastify')({
    logger: true
})

router.route('/:id')
.get(async (req, res)=>
{
    console.log(req.params.id)
    let data = await productsBL.getProductById(req.params.id);
    res.json(data);
})

router.route('/')
.get(async (req, res) => 
{
    let data = await productsBL.getAllProducts();
    res.json(data);
})

router.route('/:id')
.put(async (req, res)=>
{
    console.log('i update, req,body:', req.body.name);
    console.log('i update, req,body with parse json:', req.body.name);
    // if(typeof(req.body)===String)
    // {
    //     req.body = JSON.parse(req.body)
    // }
    let data = await productsBL.updateProduct(req.params.id, /*JSON.parse(*/req.body/*)*/);
    res.json(data);
})

router.route('/')
.post(async(req, res)=>
{
    console.log('i req.body: '+req.body);
    let data = await productsBL.insertProduct(req.body);
    res.json(data);
})

router.route('/:id')
.delete(async (req, res)=>
{
    console.log('delete product');
    let data = await productsBL.deleteProduct(req.params.id);
    res.json(data);
})

module.exports = router;