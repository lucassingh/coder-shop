import React from 'react'
import { FooterData } from './FooterData';

function Footer() {
    return (
    <>
        <div className="footer-container">
            { FooterData.map((item, index) => {
                return(
                    <div key={ index } className="footer">
                        <div className="footer-header">
                            <h3 className="footer-title">{ item.title }</h3>
                        </div>
                        <div className="footer-body">                            
                            <span className="text-body">{item.text0}</span>
                            <span className="text-body">{item.text1}</span>
                            <span className="text-body">{item.text2}</span>
                            <span className="text-body">{item.text3}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="footer-copy">
            <p className="footer-copy-text">E-shoes - All right reserved - &#169;</p>
        </div>
    </>
    )
}

export default Footer