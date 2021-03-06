
import { AnyRecord } from 'dns';
import Details from './Details';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
//data
import { Products } from '../data/products';
import Product from '../data/Product';

class HomePage extends Component /*<any, baseComponent>*//*<{},any>*/
{
  productSearched: Product[] | undefined;

  state = {
    products: Products ,
    nameForSearch: ''
  };

  searchByName()  {
      // console.log('i searchByName');
      // console.log(this.productSearched );
      // let str =  (document.getElementById('nameForSearch') as HTMLInputElement).value ;
      // this.setState({nameForSearch: str})
      let s = Products.filter(p => p.name.startsWith(this.state.nameForSearch.toLowerCase()));
      this.productSearched = s ;
      this.setState({products: s})
      // console.log('this.productSearched after setstate: '+this.productSearched);
      // console.log('productSearched: '+this.productSearched[0].name); 
      // console.log(' products: '+this.state.products[0].name);
  }

  updateStrSearch(s: string)
  {
    this.setState({nameForSearch: s})
  }

  render() 
  {
    return (
        <>
        <h1>our products :</h1>
        <tbody id="table">
          <td className="tableTitle">Id</td>
          <td className="tableTitle">Name</td>
          <td className="tableTitle">Price</td>
          <td className="tableTitle">Description</td>
          <td className="tableTitle">Details</td>
        {this.state.products.map((item) => {
          // console.log('item: ', item);
          return (
            <tr>
              {Object.entries(item).map((field) => {    
                // console.log('field: ', field);
                return <td >{field[1]}   </td>
              })}
              <Link to={"/HomePage/" + ( item.id )} id="linkTo">{'details'} </Link>
            </tr>
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
      //   <Link to="/Details">????????????????</Link>
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