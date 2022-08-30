
const productModel = require('../models/productsModel');
const boom = require('boom');
  
const getAllProducts = ()=>
{
    return new Promise((resolve, reject) => 
    {
        productModel.find({},/*.toArray*/(err, result) => 
        {
            if (err)
            {
                reject(err);
                throw boom.boomify(err);
            }
            for (i = 0; i < result.length; i++) 
            {
                let p = result[i];
                console.log(p.name + ", " + p.price + ", " + p.description);
            }
            resolve(result);
        })
    })   
}

getTry = async (req, reply) => 
{
    try {
      const cars = await productModel.find()
      return cars
    } catch (err) {
      throw boom.boomify(err)
    }
}

const getProductById = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        // באיזו מ2 הצורות נכון לעבוד, אני רוצה שיהיה מזהה נח למשתמש
        productModel.findById(id , (err, result) =>
        //productModel.findOne({id: id} , (err, result) =>
        {   
            if (err)
            {
                reject(err);
            }else
            {
                console.log("this product now....."+result.id + ", " + result.name + ", " + result.price);
                resolve(result);
            }
        })
    });
}

const updateProduct = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        console.log('obj.id: '+obj.id);
        productModel.findByIdAndUpdate(id,
        {
            
            "id": obj.id, 
            "name": obj.name,
            "price": obj.price,
            "description": obj.description
        },(err,res)=>
        {
            if(err)
            {  
                reject(err);  
            }else{
                resolve("updated")
            } 
        })
    })
}

const deleteProduct = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        productModel.findByIdAndDelete(id, (err, res)=>
        {
            if(err)
            {
                reject(err);
            }else{
                resolve("deleted!")
            }
        })
    })
}

const insertProduct = (obj) => 
{
    console.log('obj: '+obj);
    return new Promise((resolve, reject) =>
    {
        let p = new productModel(
            {
                "id": obj.id,   
                "name": obj.name,
                "price": obj.price,
                "description": obj.description
            }
        )
        //למה נוצר לי שדה ריק בזמן הוספה???
        p.save((error, response)=>
        {  
            if (error) 
            {  
                reject(error);  
            }else{
                resolve('inserted!!')
            }  
        })
    })
}

const tryToTest = () => 
{
    return new Promise((resolve, reject) =>
    {
        // if(err)
        // {
        //     console.log(err);
        // }else
        // {
            resolve(4);
        // }
    })
}
    
module.exports = { getAllProducts, getProductById, updateProduct, deleteProduct, insertProduct, tryToTest, getTry }


// const products = [
//     { id: 1, name: 'bread', price: 5, description: 'basic product' },
//     { id: 2, name: 'milk', price: 4, description: 'basic product' },
//     { id: 3, name: 'chees', price: 3, description: 'basic product' },
//     { id: 4, name: 'oil', price: 10, description: 'basic product' },
//     { id: 6, name: 'sald', price: 5, description: 'basic product' },
//     { id: 7, name: 'bottle', price: 15, description: 'basic product' },
//     { id: 8, name: 'candles', price: 20, description: 'basic product' }
// ]


//imports in start
// const Jfile = require("jsonfile");
// const store = require('../main');
// const mongo = require('mongodb');
// const mongodb=require("mongodb");  
// const MongoClient=mongodb.MongoClient;  
// const url='mongodb://localhost:27017/';

   // דוגמא להתחברות ללא מונגוס 
        // MongoClient.connect(url, (error, databases) => 
        // {
        //     if (error)
        //     {
        //         throw error;
        //     }else
        //     {
        //         const store = databases.db("store");
        // store.collection("products")
  //     }
        // })
        // Jfile.readFile('models/products.json', (err, data) => 
        // {    
        //     if(err)
        //     {
        //         console.log(err);
        //     }else
        //     {
        //         resolve(data);  
        //     }
        // });

