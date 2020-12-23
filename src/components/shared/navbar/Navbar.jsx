import React, { Component } from 'react';
import { NavbarData } from './NavbarData';
import Brandbar  from './navBrand/NavBrand';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {                
        return(
            <>
                <Brandbar/>
                <nav className="navbar-items">
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                    </div>
                    <ul className={ this.state.clicked ? 'nav-menu-m active-m' : 'nav-menu-m'}>
                        { NavbarData.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={item.url} className={item.cname}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>                    
                </nav>                
            </>
        )        
    }
}

export default Navbar;