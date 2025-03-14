import React from 'react';
import AITool from '../../../components/AITool';
import ResumeService from '../../../components/ResumeService';
import Hero from '../../../components/Hero';
import FeaturesSection from "../../../components/FeaturesSection";
import ResumeInsightsSection from "../../../components/ResumeInsightsSection";
import TestimonialSection from "../../../components/TestimonialSection";
import Feature2 from "../../../components/Feature2";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturesSection />
            <ResumeInsightsSection />
            <TestimonialSection />
            <Feature2 />
            <AITool></AITool>
            <ResumeService></ResumeService>  
        </div>
    );
};

export default Home;
