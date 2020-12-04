import React from 'react'
import Card from '../../components/shared/card/Card';
import Banner from '../../components/shared/banner/Banner';
import Jumbotron from './../../components/shared/jumbotron/Jumbotron';

function Adidas() {
    return (
        <>
            <div className="container-section">
                <Jumbotron/>
            </div>
            <div className="container-section-visits">
                <Card/>
            </div>
            <div className="container-section-visits">
                <Banner/>
            </div>
        </>
    )
}

export default Adidas
