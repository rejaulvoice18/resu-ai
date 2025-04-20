import React, { useContext, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from '../../../../../../apiendpoint/GlobalApi';
import { useParams } from 'react-router-dom';
const Skills = () => {
    const [skillsList, setSkillsList] = useState([{
        name: '',
        rating: 0
    }])
    const {resumeId}=useParams()
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const handleChange = (index, name, value) => {
        const newEntries = skillsList.slice();
        
        newEntries[index][name] = value;
        setSkillsList(newEntries);
    }
    const AddNewSkills=()=>{
      setSkillsList([...skillsList,{
         name: '',
        rating: 0
    } ])
    }
    const RemoveSkills=()=>{
      setSkillsList(skillsList=>skillsList.slice(0,-1))
    }
    const onSave=()=>{
      const  data ={
        data:{
            skills:skillsList
        }
      }
      GlobalApi.UpdateResumeDetail(resumeId,data)
      .then(resp=>{
        console.log(resp)

      })
    }
    useEffect(()=>{
      setResumeInfo(
        ...resumeInfo,
        skills:skillsList
      )
    },[skillsList])
    return (
        <div className="p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10">
            <h2 className="font-bold text-lg text-white">
                Skills
            </h2>
            <p className="text-white">Add Your top professional key Skills </p>

            <div>
                {
                    skillsList.map((item, index) => {
                        <div className='flex justify-between border rounded-lg p-3 mb-2'>
                            <div>
                                <label className='text-xs'>
                                    Name
                                </label>
                                <Input className='w-full' name='degree' onChange={(e) => handleChange(index, 'name', e.target.value)} />
                            </div>
                            <Rating style={{ maxWidth: 120 }} value={item.rating} onChange={(v) => handleChange(index, 'rating', v)} />
                        </div>
                    })
                }
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button className='text-black' onClick={AddNewSkills} variant="outline">
                        + Add More Skills
                    </Button>
                    <Button className='text-black' onClick={RemoveSkills} variant="outline">
                        - Remove
                    </Button>
                </div>

                <Button className='text-black' onClick={() => onSave()} variant="outline">Save</Button>
            </div>
        </div>
    );
};

export default Skills;