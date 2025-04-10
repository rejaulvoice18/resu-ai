import React from 'react';

const SkillsPreview = ({ resumeInfo }) => {
    return (
        <div>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{ color: resumeInfo?.themeColor }}
            >Skills</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />

            <div>
                {resumeInfo?.skills.map((skill, idx) => (
                    <div key={idx}>
                        <h2 className='text-xs text-white'>{skill?.name}</h2>
                        <div className='h-2 bg-gray-200 w-[120px]'>
                            <div className='h-2'
                                style={{backgroundColor:resumeInfo?.themeColor,
                                    width:skill?.rating+'%'
                                }}
                            >
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPreview;