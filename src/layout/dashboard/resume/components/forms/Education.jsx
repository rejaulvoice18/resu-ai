import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../../../apiendpoint/GlobalApi";
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Education = () => {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const params = useParams()
    const [educationalList, setEducationalList] = useState([
        {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ])

    const handleChange = (event, index) => {
        const newEntries = educationalList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setEducationalList(newEntries);
    }
    const AddNewEducation = () => {
        setEducationalList([...educationalList, {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }])
    }
    const RemoveEducation = () => {
        setEducationalList((educationalList) => educationalList.slice(0, -1));
    }
    const onSave = () => {
      const data =()=>{
        data:{
            education:educationalList;
        }
      }
      GlobalApi.UpdateResumeDetail(params.resumeId,data).then(resp=>{
        console.log(resp)
        
      })
    }
    useEffect(()=>{
      setResumeInfo({
        ...resumeInfo,
        education:educationalList
      })
    },[educationalList])
    return (
        <div className="p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10">
            <h2 className="font-bold text-lg text-white">
                Education
            </h2>
            <p className="text-white">Add Your Education details </p>
            <div className='text-white'>
                {
                    educationalList.map((item, index) => (
                        <div>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div className='col-span-2'>
                                    <label>University Name</label>
                                    <Input name='universityName' onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label>Degree</label>
                                    <Input name='degree' onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label>Major</label>
                                    <Input name='major' onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label>Start Date</label>
                                    <Input type='date' name='startDate' onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <Input type='date' name='endDate' onChange={(e) => handleChange(e, index)} />
                                </div>
                                <div className="col-span-2">
                                    <label>Description</label>
                                    <textarea className="textarea block w-[100%] rounded-lg" name='description' onChange={(e) => handleChange(e, index)} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button className='text-black' onClick={AddNewEducation} variant="outline">
                        + Add More Education
                    </Button>
                    <Button className='text-black' onClick={RemoveEducation} variant="outline">
                        - Remove
                    </Button>
                </div>

                <Button className='text-black' onClick={() => onSave()} variant="outline">Save</Button>
            </div>
        </div>
    );
};

export default Education;