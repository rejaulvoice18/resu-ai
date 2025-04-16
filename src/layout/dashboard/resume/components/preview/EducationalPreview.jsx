import React from 'react';

const EducationalPreview = ({resumeInfo}) => {
    return (
        <div className='my-6'>
            <h2 className='text-white text-center font-bold text-sm mb-2'
                style={{color:resumeInfo?.themeColor}}
            >Education</h2>
            <hr style={{borderColor:resumeInfo?.themeColor}} />

            {resumeInfo?.education.map((education, idx)=>(
                <div key={idx} className='my-5'>
                    <h2 className='text-white text-sm font-bold'
                    style={{
                        color:resumeInfo?.themeColor
                    }}
                    >{education?.universityName}</h2>
                    <h2 className='text-white text-xs flex justify-between'>{education?.degree} in {education?.major}
                        <span className='text-white'>{education?.startDate}-{education?.endDate}</span>
                    </h2>
                    <p className='text-white text-xs my-2'>
                        {education?.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EducationalPreview;