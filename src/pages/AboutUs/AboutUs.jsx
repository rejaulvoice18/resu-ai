import React from 'react';
import ClientsSay from './ClientsSay';
import BuildYourResume from './BuildYourResume';

const AboutUs = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <ClientsSay/>
            <BuildYourResume/>
        </div>
    );
};

export default AboutUs;