import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react';

const PersonalDetail = ({enableNext}) => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)

    const handleInputChange=(e)=>{
        enableNext(false)
        const {name,value}=e.target;

        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }

    const onSave=(e)=>{
        e.preventDefault()
        enableNext(true)
    }
    return (
        <div className='p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10'>
            <h2 className='font-bold text-lg text-white'>Personal Detail</h2>
            <h2 className='text-white'>Get Started with the basic information</h2>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm text-white'>First Name</label>
                        <Input className="text-white"  name="firstName" required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm text-white'>Last Name</label>
                        <Input className="text-white" name="lastName" required onChange={handleInputChange}/>
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm text-white'>Job Title</label>
                        <Input className="text-white" name="jobTitle" required onChange={handleInputChange}/>
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm text-white'>Address</label>
                        <Input className="text-white" name="address" required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm text-white'>Phone</label>
                        <Input className="text-white" name="phone" required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm text-white'>Email</label>
                        <Input className="text-white" name="email" required onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button type="submit" variant="outline">Save</Button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetail;