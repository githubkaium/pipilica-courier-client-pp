import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Feedbacks from '../Feedbacks/Feedbacks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Feedbacks></Feedbacks>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;