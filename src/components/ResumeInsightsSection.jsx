import React from 'react';
import ResumeInsightsSectionImage1 from '../assets/image/ai-lms.png'
import ResumeInsightsSectionImage2 from '../assets/image/futuristic-analiuz.jpg'

const ResumeInsightsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      <div className=''>
        <img
          src={ResumeInsightsSectionImage1}
          alt="AI Resume Analysis"
          className="rounded-lg shadow-md w-[350px] h-[456px] m-auto"
        />
        <p className="mt-2 text-gray-300 text-sm">
          Our AI-powered platform analyzes your skills and experience to
          suggest the best resume content, ensuring you stand out from the
          competition and impress recruiters.
        </p>
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-3xl text-gray-200 font-bold">Resumes That Get Results</h2>
        <p className="text-gray-300 mt-2">
          Resu-AI is designed to help you create a professional resume quickly
          and easily. Start building your career today!
        </p>
      </div>
      <div>
        <img
          src={ResumeInsightsSectionImage2}
          alt="Data Driven Insights"
          className="rounded-lg shadow-md md:w-[370px] md:h-[602px] sm:w-[400px] sm:h-[286px]"
        />
      </div>
    </div>
  );
};

export default ResumeInsightsSection;