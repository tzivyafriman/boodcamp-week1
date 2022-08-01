import { notEqual } from 'node:assert';
import { parse } from 'node:path/win32';
import Product from '../data/Product';
import React, { Component } from 'react';
import { NavigateOptions, Params } from 'react-router-dom';
//import { Products } from '../data/products';
import ForRouter from './ForRouter';

const IDetails = ForRouter( class Details extends Component<IForRouter>
{
    constructor(props: any) 
    {
        //שוב, אנ לא באמת מעונינת לשלוח לבנאי
        super(props);  
        this.currentId = this.props.params.id? this.props.params.id: "0";
        this.getCurrentProduct();
    }
   
    //שליפת קוד נוכחי מה-params 
    
    //דרך נוספת לשליפה פרמיטבית מה-url
    // = parseInt(document.URL.split('/')[4]) -1 ;

    currentId = '';
    Products = [{id: 1, name: 'bread',price: 5,description: 'basic product'}];

    currentProduct = {
        name: '',
        id: 0,
        price: 0,
        description: ''
    }

    newProduct = {
        name: '',
        id: 0,
        price: 0,
        description: ''
    }

    async initProducts() {
        const response = await fetch('http://localhost:8000/api/products/');
        const data = await response.json();
        this.Products = data;
        console.log('data in init: '+data);
    }

    async getCurrentProduct ()
    {
        const response = await fetch('http://localhost:8000/api/products/'+this.currentId /*+(currentId)*/);
        this.currentProduct = await response.json();
        this.setState({id:this.currentProduct.id, name: this.currentProduct.name,price: this.currentProduct.price, description: this.currentProduct.description});
        console.log('currentProduct.name: '+this.currentProduct.name);
        this.setState({});
    }

    state=
    {
        id: this.currentProduct.id, 
        name: this.currentProduct.name,
        price: this.currentProduct.price,
        description: this.currentProduct.description,
    }

    updateProduct()
    {
        this.newProduct = {id: 8, name: this.state.name, price: this.state.price, description: this.state.description}
        console.log('newProduct.name: ', this.newProduct.name);
        const opts = {
            method: 'PUT',      
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(this.newProduct)
        };
        fetch('http://localhost:8000/api/products/'+this.currentId, opts).then((response) => {
            return response.json();
        })
        .then((obj) => {
      });
    }
    
    handleChange = () => 
    {
    // console.log('i handlechange!');
        if((document.getElementById('name') as HTMLInputElement).value.toString() === '' )
        {
            console.log('i in if empty string')
        }else
        {
            this.setState({name: (document.getElementById('name') as HTMLInputElement).value});
        } 
        if((document.getElementById('price') as HTMLInputElement).value.toString() === '' )
        {
            console.log('i in if empty string')
        }else
        {
            this.setState({price: (document.getElementById('price') as HTMLInputElement).value});
        } 
        if((document.getElementById('description') as HTMLInputElement).value.toString() === '' )
        {
            console.log('i in if empty string')
        }else
        {
            this.setState({description: (document.getElementById('description') as HTMLInputElement).value});
        }
        this.newProduct = {id: 8, name: this.state.name/*'mor'*/, price: /*this.state.price*/57, description: /*this.state.description*/'work-me!'}; 
        // console.log('this.newProduct: ' + this.newProduct);
        // this.updateProduct(this.newProduct);
    }

    render() {
        return(
            <>
            {this.updateProduct()}
            {console.log('i return, productcurrent name : ' + this.currentProduct.name)}
            
            <h1>{/*Products[this.currentId]*/this.currentProduct.name}</h1>
            <form>
                {
                    <>
                    <label>id product: </label>
                    <p>{this.currentProduct.id}</p>
                    <label>name: </label><br></br>
                    <input  id="name" type="text" placeholder={this.currentProduct.name} /*onChange={(e) => this.handleChange()}*/></input><br></br>
                    <label>price: </label><br></br>
                    <input id="price" type="text" placeholder={this.currentProduct.price.toString()} /*onChange={(e) => this.handleChange(e)}</>*/></input><br></br>
                    <label>description: </label><br></br>
                    <input id="description" type="text" placeholder={this.currentProduct.description} /*onChange={(e) => this.handleChange(e)}*/></input><br></br>
                    <br></br>
                    {/* {console.log('i load details')} */}
                    </>
                }
            </form>
            <button onClick={(e) => {
                this.handleChange();
             // this.updateProduct()
            }}>edit- save my change</button>
            {/* { console.log('this.props.params.id: '+this.props.params.id)} */}
            </>
        )
    }
})
export default IDetails;

export interface IForRouter  
{
    location: Location,
    navigate: NavigateOptions,
    params: Params<string>,
}

//delete current product
// Products.splice((Products.findIndex(p => p.id === id)), 1);

// type a = tyoeOf(ForRouter);
// export interface ITDetailsProps{
//     Item : string;
// }

{/* <p>{this.nameP}</p>
            <p>{this.id}</p>
            <p>{this.price}</p>
            <p>{this.description}</p>
            <button >edit</button> */}
            
            // <input id="id" type="text" placeholder={this.id} /*onChange={(e) => this.handleChange(e)}*/></input><br></br>