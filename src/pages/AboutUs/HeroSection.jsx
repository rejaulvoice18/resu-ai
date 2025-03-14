import React from 'react';
// import imagesBanner from '../../assets/Image/futuristic-analiuz.jpg'
const HeroSection = () => {
    return (
        <div
            className="relative bg-cover bg-center text-white text-center"
            // style={{ backgroundImage: imagesBanner }}
        >
            <div className="bg-black bg-opacity-50 py-16 px-6">
                <h1 className="text-4xl font-bold">Create Your Professional Resume in Minutes!</h1>
                <p className="mt-4 text-lg">AI-Powered, User-Friendly, and Tailored for Success</p>
                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;