import { log } from 'node:console';
import { resolve } from 'node:path/win32';
import React, { Component } from 'react';
import Product from './Product';


const initGetAllProducts = async()=>
{  
    {
        const response = await fetch("http://localhost:8000/api/products/", {
            mode: "cors",
            headers: {
                "access-control-allow-origin" : "*"
            }
        });
        const data: Product[]= /*await */await (response).json();
        console.log('data from products: ', data);
        console.log('finish ');
        return data;
    }
}
export let Products: Product[]  = [{ 
            id: 1,
            name: 'bread',
            price: 5,
            description: 'basic product'
        },{
                    id: 2,
                    name: 'milk',
                    price: 4,
                    description: 'basic product'
                }];
// let tryy = initGetAllProducts().then(data => {Products2 = data});
// export let Products : Product[] = [{ id: 1, name: 'bread',price: 5,description: 'basic product'}];

//initGetAllProducts().then(data => { Products = data; console.log(Products); })

 
// .catch(data => {const Products: Product[] = []});

// export const Products = 
// [
//     { 
//         id: 1,
//         name: 'bread',
//         price: 5,
//         description: 'basic product'
//     },
//     {
//         id: 2,
//         name: 'milk',
//         price: 4,
//         description: 'basic product'
//     },
//     {
//         id: 3,
//         name: 'chees',
//         price: 3,
//         description: 'basic product'
//     },
//     {
//         id: 4,
//         name: 'oil',
//         price: 10,
//         description: 'basic product'
//     },
//     {
//         id: 5,
//         name: 'sugar',
//         price: 8.5,
//         description: 'basic product'
//     },
//     {
//         id: 6,
//         name: 'sald',
//         price: 5,
//         description: 'basic product'
//     },
//     {
//         id: 7,
//         name: 'bottle',
//         price: 15,
//         description: 'basic product'
//     },
//     {
//         id: 8,
//         name: 'candles',
//         price: 20,
//         description: 'basic product'
//     }
// ]

//initGetAllProducts().then(data => { const Products: Product[] = data.products; console.log(Products); })

export default Products;

// export default function() {
//     return tryy.then(e => {
//         // after async initialization is done, resolve with class E
//         return Products;
//     });
//  }
 // { 
        // name: string,
        // id: 1,
        // price: 5,
        // description: 'basic product'
    // },
    // {
    //     name: 'milk',
    //     id: 2,
    //     price: 4,
    //     description: 'basic product'
    // }