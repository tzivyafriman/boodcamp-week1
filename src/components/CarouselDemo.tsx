import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import '../../index.css';
import '../css/CarouselDemo.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
const productsInit = [
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

// import { ProductService } from '../data/ProductService';
// import './CarouselDemo.css';

const CarouselDemo = () => {
    const [products, setProducts] = useState([{"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41eK3ZGfBgL.__SR334,344_SCLZZZZZZZ_.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4}]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // const productService = new ProductService();

    useEffect(() => {
        
        // productService.getProductsSmall().then(data => setProducts(data.slice(0,9)));
        setProducts(productsInit);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product: any) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={product.image}/*{`images/product/${product.image}`}*/ /*onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} */alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            <div className="card">
                <Carousel value={products} numVisible={6} numScroll={1} responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate} header={<h5>Basic</h5>} />
            </div>

            {/* <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
            </div>

            <div className="card">
                <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
                    itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
            </div> */}
        </div>
    );
}
                
// const rootElement = document.getElementById("root");
// ReactDOM.render(<CarouselDemo />, rootElement);
export default CarouselDemo ;