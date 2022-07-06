import React, { Component } from 'react';
import Product from '../data/Product';
import { Products } from '../data/products';
class Details extends Component{

    // constructor(props: number) {
    //     super(props);

    // }
    currentId = parseInt(document.URL.split('/')[4]) -1 ;
    // currentId = 0;
    p = Products[this.currentId];
    nameP = Products[this.currentId].name;
    id = Products[this.currentId].id.toString();
    price = Products[this.currentId].price.toString(); 
    description = Products[this.currentId].description;

    state={
        name: Products[this.currentId].name,
        price: Products[this.currentId].price,
        description: Products[this.currentId].description
    }
    
    updateProduct(/*, name: string, description: string, price: number*/)
    {
        console.log('i update product');
        console.log('currentId: ' + this.currentId);
        // const updatedProduct = {
        //     name: (document.getElementById('updateName') as HTMLInputElement).value ,
            // id: id,
            // price: price,
            // description: description
        // }
        //this.setState({name: updatedProduct.name});
         
        //delete ocrrent product
        // Products.splice((Products.findIndex(p => p.id === id)), 1);
        Products[Products.findIndex(p => p.id === this.currentId+1)].name = this.state.name;
        Products[Products.findIndex(p => p.id === this.currentId+1)].price = this.state.price;
        Products[Products.findIndex(p => p.id === this.currentId+1)].description = this.state.description;
        
        console.log(Products);
    }
    
    handleChange = (/*event: any*/) => {
        //const { name, value } = event.target;
        console.log('i handlechange');
        // let nt =  ;
        this.setState({name: (document.getElementById('nametttt') as HTMLInputElement).value});
        // this.setState({price: (document.getElementById('price') as HTMLInputElement).value});
        // this.setState({description: (document.getElementById('description') as HTMLInputElement).value});
        console.log('this.state.name: ' +this.state.name);
        // this.updateProduct();
    }

    render() {
        return(
            <>
            <h1>i details</h1>
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
                    {/* <button onClick={()=>this.updateProduct()}>edit--save my change</button>
                    <button>try</button> */}
                    {console.log('i load details')}
                    {/* <p>{Products[0].name}</p> */}
                    </>
                }
            </form>
            <button onClick={() => {
                // this.handleChange();
                this.setState({name: (document.getElementById('name') as HTMLInputElement).value,
                price: (document.getElementById('price') as HTMLInputElement).value,
                description: (document.getElementById('description') as HTMLInputElement).value,
                }); 
            this.updateProduct()
            }}>edit- save my change</button>
            </>
        )
    }

}
export default Details;


{/* <p>{this.nameP}</p>
            <p>{this.id}</p>
            <p>{this.price}</p>
            <p>{this.description}</p>
            <button >edit</button> */}
            
            // <input id="id" type="text" placeholder={this.id} /*onChange={(e) => this.handleChange(e)}*/></input><br></br>