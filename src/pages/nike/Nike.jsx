import React from 'react'
import Card from '../../components/shared/card/Card';
import Banner from '../../components/shared/banner/Banner';
import JumbotronNike from '../../components/shared/jumbotron/JumbotronNike';
import { CardDataNike } from '../../components/shared/card/Card-data';
import { BannerDataNike } from '../../components/shared/banner/Banner-data';

function Nike() {
    return (
        <>
            <div className="container-section">
                <JumbotronNike/>
            </div>
            <div className="container-section-visits">
                <Card data={CardDataNike}/>
            </div>
            <div className="container-section-visits">
                <Banner data={ BannerDataNike }/>
            </div>
        </>
    )
}

export default Nike
