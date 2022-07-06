
import react from 'react';
import { Component } from 'react';

export interface Product{
    name: string;
    id: number;
    price: number;
    description: string;
}
export default Product;


// class Product extends Component <{},any>{
    // constructor() {
    //     super({});
    //     this.name = '';
    //     this.id = 0;
    //     this.price = 0;
    //     this.description = '';   
    // }
    // constructor(n:string,i:number,p:number,d:string)
    // {
    //     super({});
    //     this.name = n;
    //     this.id = i;
    //     this.price = p; 
    //     this.description = d;
    // }