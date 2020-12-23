import React, { useState, useEffect } from 'react';
import CartWidget from '../../cart-widget/CartWidget';
import Loader from '../../shared/loader/Loader';

const Product = (props) => {

const [ products, setProducts ] = useState([]);

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(props.data)
    }, 5000);
})

const [ showWidgetCart, setshowWidgetCart ] = useState(false);

const openWidgetCart = () => {
    setshowWidgetCart(true);
    setTimeout(() => {
        setshowWidgetCart(false);
    }, 4000);
}

useEffect(() => {
    getProducts.then(res => setProducts(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
    console.log('data', products)
}, [products])

    return (
        <>
            
                <CartWidget show={ showWidgetCart }/>
            
            
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

                                <button onClick={openWidgetCart} className="product-card-button">Add to cart</button>
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