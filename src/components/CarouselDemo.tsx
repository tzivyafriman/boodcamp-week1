import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../css/CarouselDemo.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';


const CarouselDemo = () => 
{
    const [products, setProducts] = useState([{"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "https://m.media-amazon.com/images/I/41eK3ZGfBgL.__SR334,344_SCLZZZZZZZ_.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4}]);
    const responsiveOptions = 
    [
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

    useEffect(() => 
    {
        initProducts().then(data => setProducts(data));
    }, []); 

    const initProducts = async() => 
    {
    const response = await fetch('http://localhost:8000/api/products/');
    const data = await response.json();
    console.log('data: '+data);
    return data;
    }


    const productTemplate = (product: any) => 
    {
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
        </div>
    );
}
                
export default CarouselDemo ;


// const rootElement = document.getElementById("root");
// ReactDOM.render(<CarouselDemo />, rootElement);
// import { ProductService } from '../data/ProductService';
// import './CarouselDemo.css';
    // const productService = new ProductService();


    
            {/* <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
            </div>

            <div className="card">
                <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
                    itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
            </div> */}