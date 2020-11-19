import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import HeaderContent from '../Header/HeaderContent';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderContent></HeaderContent>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;