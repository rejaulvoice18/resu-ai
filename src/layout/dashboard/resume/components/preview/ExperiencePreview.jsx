import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-white text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience?.map((experience, idx) => (
        <div key={idx} className="my-5">
          <h2
            className="text-white text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-white text-xs flex justify-between">
            {experience?.companyName},{experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          {/* <p className='text-white text-xs my-2'>
                            {experience?.workSummery}
                        </p> */}
          <div
            className="text-white text-xs"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
