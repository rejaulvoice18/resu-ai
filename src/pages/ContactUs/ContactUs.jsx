import React from 'react';

const ContactUs = () => {
    return (
        <div className='border mt-10 bg-white px-5 lg:px-0 py-[100px]'>
            {/* title and description section*/}
            <div className='text-center space-y-4 mb-6'>
                <h2 className='text-4xl font-bold'>Let's Get Started</h2>
                <p className='text-lg font-semibold'>Ready to take your career to the next level? Contact us today to learn more
                    <span className='md:block'>
                        about Resu-AI and how we can help
                    </span> </p>
            </div>

            <form action=""
                className='bg-[#F2F2F2] lg:w-[1000px] mx-auto p-[20px] md:p-[60px] border rounded-sm'>
                {/* name and email row */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
                    {/* name */}
                    <div className="">
                        <label className='block mb-2 text-lg'>Full Name</label>
                        <input type="text"
                            className="w-full border-b py-2"
                            placeholder="First Name" />
                    </div>
                    {/* name */}
                    <div className="">
                        <label className='block mb-2 text-lg'>Email</label>
                        <input type="text"
                            className=" border-b py-2 w-full"
                            placeholder="example@gmail.com" />
                    </div>
                </div>

                {/* address  row */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
                    {/*address 1  */}
                    <div className="">
                        <label className='block mb-2 text-lg'>Address 1</label>
                        <input type="text"
                            className="w-full border-b py-2 "
                            placeholder="123 main street" />
                    </div>
                    {/* address 2 */}
                    <div className="">
                        <label className='block mb-2 text-lg'>Address 2</label>
                        <input type="text"
                            className="w-full border-b py-2 "
                            placeholder="123 main street" />
                    </div>
                </div>

                {/* massage row */}
                <div>
                    {/* text area */}
                    <fieldset className="fieldset">
                        <label className='block mb-2 text-lg'>Massage</label>
                        <textarea
                            className="h-24 w-full border-b text-[16px]"
                            placeholder="Please describe your service here"></textarea>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;