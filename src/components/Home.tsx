import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Products } from '../data/products';
import  Product from '../data/Product';
import Details from './Details';

class Home extends Component /*<{},any>*/{

    render() {
        // const pr : Product[] = Products;
        return (
        <>
        <h1>hello!!!!!!!!</h1>
        <tbody>
        {
        Products.map((item) => {
            //item = אוביקט מהמערך                              
            console.log('item: ', item);
            return (
            <tr>
                {Object.entries(item).map((field) => {   
                console.log('field: ', field);
                return <td >{field[1]}   </td>
                })}
            </tr>
            );
        })}
        </tbody>
        </>
        )
    }
}
export default Home;