import React from 'react';
import Banner from '../Components/Banner/Banner';
import Brands from '../Components/Brands/Brands';
import AboutUs from '../Components/AboutUs/AboutUs';
import Services from '../Components/Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Brands></Brands>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;