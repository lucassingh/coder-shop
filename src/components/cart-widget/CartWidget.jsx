import React, { useState } from 'react'
//import { CartWidgetData } from './';

function CartWidget() {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar)
    return (
        <>
            
        <div className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <div className="cart-widget-container" onClick={showSidebar}>
               widgetCart
            </div>
        </div>
        </>
    );
}
export default CartWidget;