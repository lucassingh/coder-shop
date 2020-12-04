import React from 'react'
import { BannerData } from './Banner-data';

function Banner() {
    return (
        <>
            <div className="container-title-section">
                <h2 className="title-section">Related</h2>
            </div>            
            <div className="banner-container">
                { BannerData.map((item, index) => {
                    return(
                        <div key={ index } className="banner">
                            <img className="banner-img" src={item.urlImg} alt="shoe"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Banner