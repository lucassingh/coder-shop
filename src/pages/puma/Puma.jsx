import React from 'react'
import Card from '../../components/shared/card/Card';
import Banner from '../../components/shared/banner/Banner';
import JumbotronPuma from '../../components/shared/jumbotron/JumbotronPuma';
import { CardDataPuma } from '../../components/shared/card/Card-data';
import { BannerDataPuma } from '../../components/shared/banner/Banner-data';

function Puma() {
    return (
        <>
            <div className="container-section">
                <JumbotronPuma/>
            </div>
            <div className="container-section-visits">
                <Card data={CardDataPuma}/>
            </div>
            <div className="container-section-visits">
                <Banner data={ BannerDataPuma }/>
            </div>
        </>
    )
}

export default Puma
