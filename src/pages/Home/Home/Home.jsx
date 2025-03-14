import React from 'react';
import AITool from '../../../components/AITool';
import ResumeService from '../../../components/ResumeService';
import Hero from '../../../components/Hero';
import Contact from '../../../components/Contact';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AITool></AITool>
            <ResumeService></ResumeService> 
            <Contact></Contact> 
        </div>
    );
}
  
export default Home;
