import { React } from 'react';
import Slider from './slider/Slider';
import Card from '../shared/card/Card';

function Home() {
  return (

    <>
        <div className="container-section">
            <Slider/>   
        </div>
        <div className="container-section-visits">
            <Card/>
        </div>
    </>
  );
}

export default Home;
