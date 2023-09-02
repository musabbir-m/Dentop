import React from 'react';
import Activities from './Activities/Activities';
import Carousel from './Carousel/Carousel';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import Services from './Services/Services';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
           
            <Carousel></Carousel>
            <Activities></Activities>
            <Services></Services>
            <Stats></Stats>
            
            
        </div>
    );
};

export default Home;