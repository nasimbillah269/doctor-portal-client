import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Tritment from '../Tritment/Tritment';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Tritment></Tritment>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;