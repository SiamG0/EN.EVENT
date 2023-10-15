import React from 'react';
import Services from '../components/services/Services';
import Banner from '../components/banner/Banner';
import Gallary from '../components/Gallary/Gallary';
import OurBestWork from '../components/OurBestWork/OurBestWork';

const Home = () => {
    return (
        <div >
        
            <Banner></Banner>
            <Services></Services>
            <Gallary></Gallary>
            <OurBestWork></OurBestWork>
        </div>
    );
};

export default Home;