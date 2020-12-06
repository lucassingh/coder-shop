import React from 'react'
import CartItem from './../../components/cartItem/CarItem';
import { CartItemData } from './../../components/cartItem/CartItemData';

function Cart() {
   
    return (
        <>
            <div className="section-cart">
                <CartItem data={CartItemData}/>
            </div>
        </>
    );
}
export default Cart;