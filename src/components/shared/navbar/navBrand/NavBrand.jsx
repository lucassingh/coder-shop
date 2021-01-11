import React from 'react';
import { useContext, useState } from 'react';
import { Store } from './../../../../context/index';
import CartWidget from './../../../cart-widget/CartWidget';

function Brandbar () {

    const [ showWidgetCart, setshowWidgetCart ] = useState(false);

    const openWidgetCart = () => {
        setshowWidgetCart(!showWidgetCart);
    }

    const [data] = useContext(Store);

    console.log(data)

    return(   
        <>
            <nav className="brand-bar">
                <ul className="items">
                    <img src="../../../../assets/icons/logo.svg" alt="logo-brand"/>
                    <div className="wrapper-cart-icon">
                        <i onClick={openWidgetCart} className="fas fa-shopping-cart"></i>
                        <span className="wrapper-cart-number">{data.cantidad}</span>
                    </div>
                    <button className="button-login">Login</button>
                </ul>
            </nav>
            <CartWidget show={ showWidgetCart } action={openWidgetCart} />
        </>
    )    
}

export default Brandbar;