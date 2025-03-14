import React from 'react';import { FaMagic, FaCodeBranch, FaStar } from "react-icons/fa";
const Feature2 = () => {
    const features = [
        {
          id: 1,
          icon: <FaMagic className="text-sky-400 text-2xl" />,
          title: "Smart Resume Templates",
          description:
            "Professionally designed templates to make your resume stand out.",
        },
        {
          id: 2,
          icon: <FaCodeBranch className="text-sky-400 text-2xl" />,
          title: "ATS-Friendly Format",
          description:
            "Ensure your resume passes through applicant tracking systems.",
        },
        {
          id: 3,
          icon: <FaStar className="text-sky-400 text-2xl" />,
          title: "AI Content Generation",
          description: "AI suggests relevant skills and experiences for you.",
        },
      ];
    return (
        <div className="bg-black ">
            <div className=" text-white py-12 px-5 flex flex-col md:flex-row items-center justify-evenly space-y-6 lg:space-y-0 lg:space-x-12 w-10/12 mx-auto gap-5">
                <div className="flex flex-col space-y-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center space-x-4 w-96 cursor-pointer hover:border-t-2 hover:scale-105 transition-all duration-500 ease-in-out "
                        >
                            <div>{feature.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-sky-400">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <img
                        src="https://res.cloudinary.com/drihmlyza/image/upload/v1741841674/kbgybde2oxyacfc24cii.jpg"
                        alt="Professional"
                        className="rounded-xl shadow-lg w-full h-[450px] "
                    />
                </div>
            </div>
        </div>
    );
};

export default Feature2;