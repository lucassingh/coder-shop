import React, { useState } from 'react'
import './Count.css'

const Count = () => {

    const [qty, setQty] = useState(1);

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }    
   
    return (
        <>
            <div className="cont-button">	
                    <button className="cart-button" 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button className="cart-button" onClick={() => setQty(qty + 1)}>+</button>	
            </div>
        </>
    );
}

export default Count;