import React, { useState } from 'react';
import ButtonRedirect from '../../../shared/button-redirect/ButtonRedirect'
import CartWidget from '../../../cart-widget/CartWidget';

function Brandbar () {

    const [ showWidgetCart, setshowWidgetCart ] = useState(false);

    const openWidgetCart = () => {
        setshowWidgetCart(true);
        setTimeout(() => {
            setshowWidgetCart(false);
        }, 4000);
    }

    return(   
        <>
            <nav className="brand-bar">
                <ul className="items">
                    <img src="assets/icons/logo.svg" alt="logo-brand"/>
                    <ButtonRedirect/>
                    <button className="button-login">Login</button>
                </ul>
            </nav>
            <CartWidget show={ showWidgetCart }/>            
        </>
    )    
}

export default Brandbar;