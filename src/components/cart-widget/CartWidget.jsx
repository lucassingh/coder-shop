import React from 'react'

function CartWidget({ show }) {
   
    return (
        <>
            <div >
                <div className={ ` cart-widget-container ${ show ? 'open' : 'close' }`} >
                    <div className="wraper">
                        <div className="cart-widget-product">
                            <h4 className="title-widget">Added to your cart</h4>
                            <img className="img-widget"src="assets/cards/adidas-3.png" alt=""/>
                            <span className="text-detail-widget">Adidas Booster Rapix</span>
                            <span className="price-widget">U$d 125.00</span>
                        </div>
                        <div className="cart-widget-product center-desktop">
                            <h4 className="title-widget">2 items added to your cart</h4>                        
                            <span className="text-detail-widget">Total cart:</span>
                            <span className="price-widget">U$d 275.00</span>
                        </div>
                        <div className="cart-widget-product buttons centered">
                            <button className="button-secondary">View Cart</button>
                            <button className="button-primary">Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartWidget;