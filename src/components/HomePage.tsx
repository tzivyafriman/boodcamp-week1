import React, { Component } from 'react';
import { Products } from '../data/products';
import Product from '../data/Product';
import { AnyRecord } from 'dns';
import Details from './Details';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';


class HomePage extends Component /*<any, baseComponent>*//*<{},any>*/{
  
productSearched: Product[] | undefined;
  // products: Product[] = Products;

  // constructor() {
  //   super({});
  //   this.state = {
  //   products: Products
  // };  
  // }

  state = {
    products: Products ,
    nameForSearch: ''
  };
  navigator: any;


    searchByName()  {
        console.log('i searchByName');
        console.log(this.productSearched);
        //this.updatestr();
        // let str =  (document.getElementById('nameForSearch') as HTMLInputElement).value ;
        // this.setState({nameForSearch: str})
        let s = Products.filter(p => p.name.startsWith(this.state.nameForSearch) );
        this.productSearched = s ;
        this.setState({products: s})
        console.log('this.productSearched after setstate: '+this.productSearched);
        console.log('productSearched: '+this.productSearched[0].name); 
        console.log(' products: '+this.state.products[0].name);
    }

    updateStrSearch()
    {
      let str =  (document.getElementById('nameForSearch') as HTMLInputElement).value ;
      this.setState({nameForSearch: str})
    }

    NavigateToDetails(){
      console.log('i NavigateToDetails');
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
    }

    render() {

        return (
            <>
            <h1>hai</h1>
            <tbody>
            {this.state.products.map((item) => {
              console.log('item: ', item);
              return (
                <tr>
                  {Object.entries(item).map((field) => {    
                    console.log('field: ', field);
                    return <td >{field[1]}   </td>
                  })}
                  {/* <button onClick={()=> this.NavigateToDetails() }>details</button> */}
                  {/* <button> <Link to={"/About" }>about </Link></button> */}
                  {/*cheek this possability,  */}
                  <Link to={`/HomePage/${item.id ?? ''}/${'?'}`} className="btn btn-secondary">
                    <i className="fa fa-history" /> more
                  </Link>
                  <Link to={"/HomePage/" + ( item.id )}>{'details'} </Link>
                </tr>
              );
            })}
          </tbody>
          
          <div>
            <input id="nameForSearch" type="text" onChange={()=> this.updateStrSearch()} placeholder="enter name of product"></input>
            <button onClick={() => this.searchByName()}>search</button>
          </div>
          </>
        )
    }
}
export default HomePage;