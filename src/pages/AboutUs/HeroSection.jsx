import React from 'react';
import imagesBanner from '../../assets/Image/futuristic-analiuz.jpg'
const HeroSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${imagesBanner})`,
            }}
            className="flex flex-col bg-cover bg-center bg-black items-center justify-center lg:min-h-[560px] max-w-full mx-auto text-left">
            <div className=" bg-opacity-50 py-16 px-6">
                <h1 className="text-5xl font-bold">Create Your Professional Resume in Minutes!</h1>
                <p className="mt-4 text-lg">AI-Powered, User-Friendly, and Tailored for Success</p>
                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;