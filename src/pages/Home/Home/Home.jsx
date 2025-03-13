import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Footer from '../../../shared/Footer/Footer';
import Hero from '../../../components/Hero';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;