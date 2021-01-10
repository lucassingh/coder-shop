import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from './../../../../context/index';

function Brandbar () {

    let history = useHistory();

    const redirect = () => {
        history.push('/cart')
    }

    const [data, useData] = useContext(Store);    

    return(   
        <>
            <nav className="brand-bar">
                <ul className="items">
                    <img src="../../../../assets/icons/logo.svg" alt="logo-brand"/>
                    <div className="wrapper-cart-icon" onClick={redirect}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="wrapper-cart-number">{data.cantidad}</span>
                    </div>
                    <button className="button-login">Login</button>
                </ul>
            </nav>           
        </>
    )    
}

export default Brandbar;