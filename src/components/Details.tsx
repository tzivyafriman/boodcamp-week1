import { notEqual } from 'node:assert';
import { parse } from 'node:path/win32';
import Product from '../data/Product';
import React, { Component } from 'react';
import { NavigateOptions, Params } from 'react-router-dom';
import { Products } from '../data/products';
//componenets
import ForRouter from './ForRouter';

const IDetails = ForRouter( class Details extends Component<IForRouter>
{
    //שליפת קוד נוכחי מה-params 
    currentId = parseInt(this.props.params.id? this.props.params.id: "0")-1;
    //דרך נוספת לשליפה פרמיטבית מה-url
    // = parseInt(document.URL.split('/')[4]) -1 ;

    p = Products[this.currentId];
    nameP = Products[this.currentId].name;
    id = Products[this.currentId].id.toString();
    price = Products[this.currentId].price.toString(); 
    description = Products[this.currentId].description;

    state={
        product: Products[this.currentId] ,
        name: Products[this.currentId].name,
        price: Products[this.currentId].price,
        description: Products[this.currentId].description
    }

    //האם נכון יותר לעבוד עם אתחול כל משתני המחלקה ב-ctot?
    // constructor ()
    // {
    //     super();
    //     this.state={
    //         product: Products[this.currentId] ,
    //         name: Products[this.currentId] ,
    //         price: Products[this.currentId].price,
    //         description: Products[this.currentId].description
    //     }
    // }
    
    updateProduct()
    {
        // // console.log('i update product!');
        // console.log('currentId: ' + this.currentId);
        Products[Products.findIndex(p => p.id === this.currentId+1)].name = this.state.name;
        Products[Products.findIndex(p => p.id === this.currentId+1)].price = this.state.price;
        Products[Products.findIndex(p => p.id === this.currentId+1)].description = this.state.description;
        // console.log(Products);
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
        this.updateProduct();
    }

    render() {
        return(
            <>
            {this.updateProduct()}
            <h1>{Products[this.currentId].name}</h1>
            <form>
                {
                    <>
                    <label>id product: </label>
                    <p>{this.id}</p>
                    <label>name: </label><br></br>
                    <input  id="name" type="text" placeholder={this.nameP} /*onChange={(e) => this.handleChange()}*/></input><br></br>
                    <label>price: </label><br></br>
                    <input id="price" type="text" placeholder={this.price} /*onChange={(e) => this.handleChange(e)}</>*/></input><br></br>
                    <label>description: </label><br></br>
                    <input id="description" type="text" placeholder={this.description} /*onChange={(e) => this.handleChange(e)}*/></input><br></br>
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