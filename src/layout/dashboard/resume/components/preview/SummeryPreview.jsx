import React from 'react';

const SummeryPreview = ({resumeInfo}) => {
    return (
        <div>
            <p className='text-xs text-white'>
                {
                    resumeInfo?.summery
                }
            </p>
        </div>
    );
};

export default SummeryPreview;