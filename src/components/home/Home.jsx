import { React } from 'react';
import Slider from './slider/Slider';
import Card from '../shared/card/Card';
import Banner from '../shared/banner/Banner';

function Home() {
  return (

    <>
        <div className="container-section">
            <Slider/>
        </div>
        <div className="container-section-visits">
            <Card/>
        </div>
        <div className="container-section-visits">
            <Banner/>
        </div>
    </>
  );
}

export default Home;
