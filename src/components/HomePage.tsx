
import { AnyRecord } from 'dns';
import Details from './Details';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
//data
//import { Products } from '../data/products';
import Product from '../data/Product';
import { log } from 'console';
//import Products from '../data/products';

class HomePage extends Component /*<any, baseComponent>*//*<{},any>*/
{
  constructor() {
    //i dont have something send to super
    super(123);
    this.initProducts();
  }

  Products : Product[] | undefined;
  
  state = {
    //איך אפשר לאתחל שיהיה ברור מאיזה סוג הוא
    productSerched: [{_id: '62d90bbc0656b456412d200c', id: 1,name: 'bread',"description":"basic-product","image": "https://m.media-amazon.com/images/I/41GD1ofaLqL.__SR334,344_SCLZZZZZZZ_.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5}],
    nameForSearch: ''
  };

  /*async*/ initProducts/*()*/ = async() => {
    // console.log(' i initProducts');
    const response = await fetch('http://localhost:8000/api/products/');
    const data = await response.json();
    this.Products = data/*.products*/;
    this.setState({ productSerched: data/*.products*/ })
    //this.allProducts = data.products;
    console.log('data: '+data);
    console.log('state.products: ', this.state.productSerched);
  }

  searchByName()  {
    let s = this.Products?.filter(p => p.name.toLowerCase().startsWith(this.state.nameForSearch.toLowerCase()));
    this.setState({productSerched: s})
  }

  updateStrSearch(s: string)
  {
    this.setState({nameForSearch: s})
  }

  render() 
  {
    return (
        <>
        <tbody id="table">
          <td className="tableTitle">Name</td>
          <td className="tableTitle">Description</td>
          <td className="tableTitle">Price</td>
          <td className="tableTitle">Category</td>
          <td className="tableTitle">Quantity</td>
          <td className="tableTitle">Rating</td>
          <td className="tableTitle">InventoryStatus</td>
          <td className="tableTitle">Details</td>
        {this.state.productSerched.map((item) => {
          // console.log('item: ', item);
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.rating}</td>
              <td>{item.inventoryStatus}</td>
              <Link to={"/HomePage/" + ( item._id )} id="linkTo">{'details'} </Link>
            </tr>
            // <tr>
            //   {Object.entries(item).slice(1,4).map((field) => {    
            //     console.log('field: ', field);
            //     return <td >{field[1]}   </td>
            //   })}
            //   <Link to={"/HomePage/" + ( item._id )} id="linkTo">{'details'} </Link>
            // </tr>
          );
        })}
      </tbody>
      <br></br>
      <div>
        <input id="nameForSearch" type="text" onChange={(e)=> this.updateStrSearch(e.target.value)} placeholder="enter name of product"></input>
        <button onClick={() => this.searchByName()}>search</button>
      </div>
      </>
    )
  }
}
export default HomePage;

 // <Router location={'/Details/' + '1'} navigator={this.navigator}>
      //   <div>
      //   <Link to="/Details">ךןמוממממ</Link>
      //   </div>
      // </Router>
      
      
      // <Router>
      //   <header>
      //     <Link to="/Details">Details22</Link> 
      //   </header>
        
      // </Router>
      
    //   <> 
    // <Router>
    //   <div>
    //       <Link to="/Details">Details</Link> 
    //     <Routes>
    //       <Route path="/Details" element={<Details />} />
    //     </Routes>
    //   </div>
    // </Router>
    // </>  

    {/* <button onClick={()=> this.NavigateToDetails() }>details</button> */}
              {/* <button> <Link to={"/About" }>about </Link></button> */}
              {/*cheek this possability,  */}
              {/* <Link to={`/HomePage/${item.id ?? ''}/${'?'}`} className="btn btn-secondary">
                <i className="fa fa-history" /> more
              </Link> */}

    // searchByName()  {
      // console.log('i searchByName');
      // console.log(this.productSearched );
      // let str =  (document.getElementById('nameForSearch') as HTMLInputElement).value ;
      // this.setState({nameForSearch: str})
      // let s = this.Products?.filter(p => p.name.startsWith(this.state.nameForSearch.toLowerCase()));
      // this.productSearched = s ;
      // this.setState({productSerched: s})
      // console.log('this.productSearched after setstate: '+this.productSearched);
      // console.log('productSearched: '+this.productSearched[0].name); 
      // console.log(' products: '+this.state.products[0].name);
  // }