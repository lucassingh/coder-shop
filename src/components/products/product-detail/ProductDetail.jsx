import React, { useState } from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from './../../../context/index';

const ProductDetail = () => {

    const history = useHistory();

    const [data, setData] = useContext(Store);

    const [qty, setQty] = useState(1);

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            //items: [...data.items, item],
        });
        // history.push('/cart');
        alert(`Agregaste ${qty} productos al carrito`);
    }

    console.log(data)

    const redirect = () => {
        history.push('/cart')
    }
    
    return (
        <>
            <div className="container-title-section-cart">
                <h2 className="title-section">Product detail</h2>
            </div>
            
            <div className="product-detail-container">
                <div className="product-detail-wraper">
                    <div className="product-detail-container-img">
                        <img src="../../../../assets/adidas.png" alt="adidas-running"/>
                    </div>
                    <div className="product-detail-info">
                        <h2>Adidas Booster 3.0</h2>
                        <p className="product-detail-text">
                            Lorem ipsum dolor sit amet asdd asdas.
                        </p>
                    </div>
                    <div className="product-detail-price">
                        <p>u$d 125.90</p>
                    </div>
                    <div className="product-detail-actions">
                        <h5>Pick size</h5>
                        <div className="product-detail-sizes">                        
                            <button>39</button>
                            <button>40</button>
                            <button className="active">41</button>
                            <button>43</button>
                        </div>
                    </div>
                    <div className="container-count">
                        <div className="cont-button">	
                            <button className="cart-button" 	
                                    disabled={qty === 1 ? 'disabled' : null }
                                    onClick={handleClickResta}	
                                >
                                -	
                            </button>	
                            <input type="text" value={qty} readOnly/>	
                            <button className="cart-button" onClick={() => setQty(qty + 1)}>+</button>	
                        </div>
                    </div>
                    <div className="product-detail-button">
                        <div className="link" onClick={onAdd}>Add to cart</div>
                    </div>
                    <div className="product-detail-button">
                        <button className="link" onClick={redirect}>Continue shopping</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDetail;