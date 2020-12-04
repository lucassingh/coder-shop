import React from 'react'
import Card from '../../components/shared/card/Card';
import Banner from '../../components/shared/banner/Banner';
import JumbotronAdidas from '../../components/shared/jumbotron/JumbotronAdidas';
import { CardDataAdidas } from '../../components/shared/card/Card-data';
import { BannerDataAdidas } from '../../components/shared/banner/Banner-data';

function Adidas() {
    return (
        <>
            <div className="container-section">
                <JumbotronAdidas/>
            </div>
            <div className="container-section-visits">
                <Card data={CardDataAdidas}/>
            </div>
            <div className="container-section-visits">
                <Banner data={ BannerDataAdidas }/>
            </div>
        </>
    )
}

export default Adidas
