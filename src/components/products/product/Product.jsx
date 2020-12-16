import React, { useState, useEffect } from 'react';

const Product = (props) => {

const [ products, setProducts ] = useState([]);

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(props.data)
    }, 5000)
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

                <div className="product-container">
                    { products.map((item, index) => {
                        return(
                        <div key={ index } className="product-card">
                            <div className="product-card-img">
                                <img src={item.urlImg} alt="shoe"/>
                            </div>
                            <div className="product-card-body">
                                <h3 className="product-card-title">{ item.title }</h3>
                                <p>{ item.price }</p>

                                <button className="product-card-button">Add to cart</button>
                            </div>
                        </div>
                        )
                    })}
                </div> :

                <p>Cargando items...</p>
            }
        </>
    )
}

export default Product;