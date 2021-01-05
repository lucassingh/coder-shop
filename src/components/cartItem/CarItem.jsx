import React from 'react'
import Count from './count-item/Count';

function CartItem(props) {
   
    return (
        <>
            <div className="container-title-section-cart">
                <h2 className="title-section">Your Cart</h2>
            </div>
            {/* <div className="cart-item-container">
                <div className="cart-item-wrapper">                   
                    { props.data.map((item, index) => {
                        return(
                        <div key={ index } className="cart-item-product">
                            <div className="cart-item-info-cont">
                                <div className="cart-img">
                                    <img src={item.urlImg} alt="shoe"/>
                                </div>
                                <div className="cart-info"> 
                                    <h4>{ item.title }</h4>
                                    <p className="cart-item-text">{item.description}</p>
                                </div>                               
                            </div>
                            <div className="cont-actions">
                                <Count/>
                                <div className="cont-price">
                                    <p className="cart-item-price">{item.price}</p>
                                    <p className="cart-link"> Remove item</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="cart-container-purchase">
                    <button className="cart-purchase-button">Purchase</button>
                </div>
            </div>*/} 
        </>
    );
}
export default CartItem;