import React from 'react';
import Robot from '../../src/assets/image/robot.jpg'

const Hero = () => {
    return (
        <div className='bg-black pt-20'>
            <div className='max-w-screen-xl mx-auto pb-5'>
                <div className='pb-20'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl md:w-2/6 mx-auto text-center'>Craft your perfect resume, effortlessly</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <img src={Robot} alt="" />
                    </div>
                    <div>
                        <div className='text-center'>
                            <p>Resu-Ai helps you create professional resumes with Ai.
                                Land your dream job faster with our advanced technology.
                                <button className='bg-red-400/80 block px-6 py-2 my-5 mx-auto cursor-pointer'>Get Started</button>
                            </p>
                        </div>
                        <div className='flex justify-between pb-10 pt-20 md:pt-30'>
                            <p className='w-2/8'>AI-Powered Resume Building Platform</p>
                            <p className='w-2/8'>%50k+ Resumes Build Successfully</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;