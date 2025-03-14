<<<<<<< HEAD
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
=======
import React from "react";
import Hero from "../../../components/Hero";
import TestimonialSection from "../../../components/TestimonialSection";
import FeaturesSection from "../../../components/FeatureSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <TestimonialSection></TestimonialSection>
    </div>
  );
>>>>>>> bc5477b942f0e4e7ed391f9f67bae680dbc1ac70
};

export default Home;
