import React from 'react';
import Activities from './Activities/Activities';
import Carousel from './Carousel/Carousel';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import Services from './Services/Services';
import Stats from './Stats/Stats';
import BookAppointment from './BookAppointment/BookAppointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
           
            <Carousel></Carousel>
            <Activities></Activities>
            <Services></Services>
            <Stats></Stats>
            <BookAppointment></BookAppointment>
            <Contact></Contact>
            <Testimonial></Testimonial>
           
            
            
        </div>
    );
};

export default Home;