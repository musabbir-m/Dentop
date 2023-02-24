import React from 'react';
import Activities from '../Activities/Activities';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Activities></Activities>
        </div>
    );
};

export default Home;