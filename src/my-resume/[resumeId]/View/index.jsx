import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/layout/dashboard/resume/components/ResumePreview'
import NavBar from '@/shared/NavBar/NavBar'
import GlobalApi from '../../../../apiendpoint/GlobalApi'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RWebShare } from 'react-web-share'


function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState()
    const { resumeId } = useParams()

    useEffect(() => {
        GetResumeInfo();
    }, [])
    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            console.log(resp.data.data)
        })
    }

    const HandleDownload = () => {
        window.print();
    }
    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>


            <div id='no-print'>
                <NavBar></NavBar>
                <div className='my-10 mx-10 md:mx-20 ;lg:mx-36'>
                    <h2 className='text-center text-2xl font-medium'>Congrats! Your AI Generated Resume Is Ready</h2>
                    <p className='text-center text-gray-400'>Now You Are Ready To Download Your Resume And You Can Share Resume Url With your Friends And Family</p>
                    <div className='flex justify-between px-44 my-10'>
                        <Button onClick={HandleDownload}>Download</Button>
                        <RWebShare
                            data={{
                                text: "Hello, Everyone, This is My Resume",
                                url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+'/view',
                                title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        ><Button>Share</Button></RWebShare>
                        
                    </div>
                </div>
            </div>
            <div id="print-area">
                <ResumePreview></ResumePreview>
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default ViewResume