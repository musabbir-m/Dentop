import React from 'react';
import Activities from '../Activities/Activities';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Carousel></Carousel>
            <Activities></Activities>
            <Services></Services>
            
        </div>
    );
};

export default Home;