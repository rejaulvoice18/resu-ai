import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummery: ''
}
const Experience = ({ enableNext }) => {
    const [experienceList, setExperienceList] = useState([
        formField
    ])

    const handleChange = (idx, event) => {

    }
    return (
        <div>
            <div className='p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10'>
                <h2 className='font-bold text-lg text-white'>Professional Experience</h2>
                <p className='text-white'>Add Your previous Job Experience</p>
                <div>
                    {experienceList.map((item, idx) => (
                        <div>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs text-white'>Position Title</label>
                                    <Input name="title" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>Company Name</label>
                                    <Input name="companyName" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>City</label>
                                    <Input name="city" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>State</label>
                                    <Input name="state" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>Start Date</label>
                                    <Input type="date" name="startDate" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>End Date</label>
                                    <Input type="date"  name="endDate" onChange={(event) => handleChange(idx, event)} />
                                </div>
                                <div>
                                    <label className='text-xs text-white'>Work Summery</label>
                                    <Input name="workSummery" onChange={(event) => handleChange(idx, event)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;