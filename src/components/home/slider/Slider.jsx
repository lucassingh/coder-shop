import React, { useState } from 'react';
import Image from './Image';
import i1 from '../../../images/1.jpg';
import i2 from '../../../images/2.jpg';
import i3 from '../../../images/3.jpg';

function Slider() {
    let sliderArray = [
        <Image src={i1}/>, 
        <Image src={i2}/>, 
        <Image src={i3}/>
    ];

    const [x, setX] = useState(0)
    const goLeft = () => {
        // setX(x + 100);
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
        console.log(x);
    }

    const goRight = () => {
        ( x === -100 * (sliderArray.length-1)) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="slider">
            {
                sliderArray.map((item, index) => {
                    return(
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}    
                        </div>            
                    )
                })
            }
            <button id="goLeft" onClick={ goLeft }>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={ goRight }>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;