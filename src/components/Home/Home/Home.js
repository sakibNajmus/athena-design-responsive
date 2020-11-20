import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import HeaderContent from '../Header/HeaderContent';
import Services from '../Services/Services';
import Achievements from '../Achievements/Achievements';
import TeamOrder from '../TeamOrder/TeamOrder';
import GetOffers from '../GetOffer/GetOffers';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderContent></HeaderContent>
            <Services></Services>
            <AboutUs></AboutUs>
            <Achievements/>
            <TeamOrder/>
            <GetOffers/>
            <Footer/>
        </div>
    );
};

export default Home;