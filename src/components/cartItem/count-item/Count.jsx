import React, { useState } from 'react'
import './Count.css'

const Count = () => {

    const [ counter, setCounter ] = useState( 0 );

    const [qty, setQty] = useState(1);

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
        });
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	
    }
   
    return (
        <>
            <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
            </div>
        </>
    );
}

export default Count;