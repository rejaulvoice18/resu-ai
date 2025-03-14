import React from 'react';

const BuildYourResume = () => {
    return (
        <div className='mt-18 grid grid-cols-1 lg:grid-cols-2 lg:h-[400px] rounded-md'>
            {/* ---- */}
            <div className='bg-[#636AE8] h-full p-5 flex flex-col justify-between'>
                <div>
                    <h3 className='text-5xl font-bold text-white mb-10'>Build Your Resume <span className='md:block mt-2'>Now</span></h3>
                    <p className='text-lg text-white mb-5 lg:mb-0'>Creating a professional resume is just a few clicks away. Get started easily and land your dream job today!</p>
                </div>
                <div>
                    <button className='py-2 px-4 bg-black rounded-md font-bold text-white'>Join for free</button>
                </div>
            </div>
            {/* ----- */}

            {/* ---- */}
            <div>
                <img src="https://s29814.pcdn.co/wp-content/uploads/2022/10/Shutterstock_749265139-1.png"
                className='h-[400px] object-cover w-full'
                alt="" />
            </div>
            {/* ----- */}
        </div>
    );
};

export default BuildYourResume;