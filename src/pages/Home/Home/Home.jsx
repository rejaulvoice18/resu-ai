import React from 'react';
import FeaturesSection from '../../../components/FeaturesSection';
import ResumeInsightsSection from '../../../components/ResumeInsightsSection';
import Hero from '../../../components/Hero';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturesSection></FeaturesSection> 
            <ResumeInsightsSection></ResumeInsightsSection>
        </div>
    );
};

export default Home;