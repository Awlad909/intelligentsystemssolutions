import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import HomeServices from '../HomeServices/HomeServices';
import Portfolio from '../Portfolio/Portfolio';
import Clients from '../Clients/Clients';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider/>
            <About/>
            <HomeServices/>
            <Portfolio/>
            <Clients/>
            <Testimonial/>
        </div>
    );
};

export default Home;