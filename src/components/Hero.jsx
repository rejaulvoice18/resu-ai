import React from 'react';

const Hero = () => {
    return (
        <div className='bg-black pt-20'>
            <div>
                <div className='pb-20'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl md:w-2/6 mx-auto'>Craft your perfect resume, effortlessly</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div className='text-center flex-col'>
                            <p>Resu-Ai helps you create professional resumes with Ai.
                                Land your dream job faster with our advanced technology.
                                <button className='bg-red-400/80 block px-6 py-2 my-5'>Get Started</button>
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;