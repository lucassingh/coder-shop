import { React } from 'react';
import Slider from './slider/Slider';
import Card from '../shared/card/Card';
import Banner from '../shared/banner/Banner';
import { CardDataHome } from '../../components/shared/card/Card-data';
import { BannerDataHome } from '../../components/shared/banner/Banner-data';

function Home() {
  return (

    <>
        <div className="container-section">
            <Slider/>
        </div>
        <div className="container-section-visits">
            <Card data={CardDataHome}/>
        </div>
        <div className="container-section-visits">
            <Banner data={BannerDataHome}/>
        </div>
    </>
  );
}

export default Home;
