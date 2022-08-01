import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import '../css/ShowAll.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
// import { ProductService } from '../service/ProductService';
import { Rating } from 'primereact/rating';
// import './DataViewDemo.css';
const productsInit = [
    // {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41GD1ofaLqL.__SR334,344_SCLZZZZZZZ_.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
    // {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41eK3ZGfBgL.__SR334,344_SCLZZZZZZZ_.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41GD1ofaLqL.__SR334,344_SCLZZZZZZZ_.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41eK3ZGfBgL.__SR334,344_SCLZZZZZZZ_.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "https://m.media-amazon.com/images/I/41p+DYrpbZS.__SR334,344_SCLZZZZZZZ_.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "https://m.media-amazon.com/images/I/41c1-XYkuAL.__SR334,344_SCLZZZZZZZ_.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "https://m.media-amazon.com/images/I/41SEcF80EAL.__SR334,344_SCLZZZZZZZ_.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "https://m.media-amazon.com/images/I/31RNH-9StnL.__SR334,344_SCLZZZZZZZ_.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
    {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "https://m.media-amazon.com/images/I/51yhiZspvkL.__SR334,344_SCLZZZZZZZ_.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "https://m.media-amazon.com/images/I/41GeSau9ahL.__SR334,344_SCLZZZZZZZ_.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "https://m.media-amazon.com/images/I/419vtmOZnoL.__SR334,344_SCLZZZZZZZ_.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
    {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "https://m.media-amazon.com/images/I/51KSCAdbeDL.__SR334,344_SCLZZZZZZZ_.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
]

const ShowAll = () => {
    const [products, setProducts] = useState([{"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41GD1ofaLqL.__SR334,344_SCLZZZZZZZ_.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5}]);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(0);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    // const productService = new ProductService();

    useEffect(() => {
        // productService.getProducts().then(data => setProducts(data));
        initProducts().then(data => setProducts(data));
        // setProducts( p);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const initProducts = async() => {
    const response = await fetch('http://localhost:8000/api/products/');
    const data = await response.json();
    // setProducts( data)
    //this.allProducts = data.products;
    console.log('data: '+data);
    return data;
    // console.log('state.products: ', this.state.productSerched);
  }

    const onSortChange = (event: { value: any; }) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data: any) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={/*`images/product/${data.image}`*/data.image}/* onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}*/ alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data: any) => {
        return (
            <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                    <div className="product-grid-item-content">
                    <img src={/*`images/product/${data.image}`*/data.image}/* onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}*/ alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product:Object, layout:string) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products } layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        /*sortOrder={sortOrder}*/ sortField={''} />
            </div>
        </div>
    );
}
 export default ShowAll;
const rootElement = document.getElementById("root");
ReactDOM.render(<ShowAll />, rootElement);