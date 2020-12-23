import React from 'react';
import ButtonRedirect from '../../../shared/button-redirect/ButtonRedirect'

function Brandbar () {

    return(   
        <>
            <nav className="brand-bar">
                <ul className="items">
                    <img src="../../../../assets/icons/logo.svg" alt="logo-brand"/>
                    <ButtonRedirect/>
                    <button className="button-login">Login</button>
                </ul>
            </nav>           
        </>
    )    
}

export default Brandbar;