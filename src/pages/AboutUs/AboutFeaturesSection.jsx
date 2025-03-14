import React from 'react';
import { FaArrowRight, FaFileAlt, FaPenFancy, FaCheckCircle } from "react-icons/fa";
const AboutFeaturesSection = () => {
    return (
        <div className="bg-black text-white py-16  px-10">
            <div className="max-w-5xl mx-auto my-18 text-center">
                <h2 className="text-2xl font-bold mb-12">Why Use Our Resume Builder?</h2>
                <div className="grid md:grid-cols-3 gap-8 ">
                    <div className="flex flex-col items-center">
                        <FaFileAlt className="text-4xl mb-4" />
                        <h3 className="text-lg font-semibold">Personalized Templates</h3>
                        <p className="mt-2 text-gray-400">Choose from a diverse range of professional templates tailored to various industries.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPenFancy className="text-4xl mb-4" />
                        <h3 className="text-lg font-semibold">Guided Writing Assistance</h3>
                        <p className="mt-2 text-gray-400">Receive real-time suggestions to help you articulate your skills and experiences effectively.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCheckCircle className="text-4xl mb-4" />
                        <h3 className="text-lg font-semibold">ATS-Friendly Formats</h3>
                        <p className="mt-2 text-gray-400">Your resume will pass through Applicant Tracking Systems with ease, increasing your job prospects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeaturesSection;