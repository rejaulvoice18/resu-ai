import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
const FeaturesSection = () => {
  return (
    <div className=" text-white p-6 max-w-6xl mx-auto ">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4">
          {["AI Builder", "Easy Editing", "Smart Templates", "Data Driven", "ATS Ready"].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-gray-700"
            >
              <span className="text-3xl font-medium">{item}</span>
              <FaArrowTrendUp className="text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;