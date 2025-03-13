import React from 'react';
import AITool from '../../../components/AITool';
import ResumeService from '../../../components/ResumeService';
import Hero from '../../../components/Hero';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AITool></AITool>
            <ResumeService></ResumeService>  
        </div>
    );
};

export default Home;