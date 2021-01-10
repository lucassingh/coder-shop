import React, { useState, useEffect } from 'react';
import Loader from '../../shared/loader/Loader';
import { Link } from 'react-router-dom';

const Product = (props) => {

const [ products, setProducts ] = useState([]);

const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(props.data)
    }, 1000);
})

useEffect(() => {
    getProducts.then(res => setProducts(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
    console.log('data', products)
}, [products])

    return (
        <>
            
            <div className="container-title-section-cart">
                <h2 className="title-section">Shop</h2>
            </div>

            {
                products.length ?

                <div className="product-container animated">
                    { products.map((item, index) => {
                        return(
                        <div key={ index } className="product-card">
                            <div className="product-card-img">
                                <img src={item.urlImg} alt="shoe"/>
                            </div>
                            <div className="product-card-body">
                                <h3 className="product-card-title">{ item.title }</h3>
                                <p>{ item.price }</p>
                                <div className="container-product-actions">
                                    <button className="product-card-button">Add to cart</button>
                                    <Link to={`/product-detail/${item.id}`} className="product-view-more-button">+</Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div> :
                <Loader/>
            }
        </>
    )
}

export default Product;