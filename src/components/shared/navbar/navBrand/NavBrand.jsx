import React, { Component } from 'react';

class Brandbar extends Component {

    render() {
        return(
            <nav className="brand-bar">                
                <ul className="items">
                    <img src="assets/icons/logo.svg" alt="logo-brand"/>
                    <i className="fas fa-shopping-cart"></i>
                    <button className="button-login">Login</button>
                </ul>
            </nav>
        )
    }
}

export default Brandbar;