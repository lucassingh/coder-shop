import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Count = () => {

    const [ counter, setCounter ] = useState( 0 );

    //handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    //handleRemove
    const handleRemove = () => {
        setCounter( counter - 1 );
    }
   
    return (
        <>
            <div className="cont-button">
                <button onClick={ handleRemove } className="cart-button">-</button>
                <button onClick={ handleAdd } className="cart-button">+</button>
                <span className="cart-text">Added item: </span><h3>{ counter}</h3>
            </div>            
        </>
    );
}

Count.propTypes = {
    value: PropTypes.number
}

export default Count;