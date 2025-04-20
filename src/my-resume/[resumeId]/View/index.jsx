
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import ResumePreview from '@/layout/dashboard/resume/components/ResumePreview';
import GlobalApi from '../../../../apiendpoint/GlobalApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RWebShare } from 'react-web-share';


const Viewresume = () => {
    const { resumeId } = useParams()
    const { resumeInfo, setResumeInfo } = useState();

    // useEffect(() => {
    //     GetResumeInfo()
    // }, [])
    // const GetResumeInfo = () => {
    //     GlobalApi.GetResumeById(resumeId).then(resp =>{
    //         console.log(resp)
    //         setResumeInfo(resp.data.data)
    //     })

    // }
    const handleDownload = () => {
        window.print()
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id='no-print' >
                <div className='my-10 mx-10 md:mx-20 lg:mx-36 text-white'>
                    <h1 className='text-center text-2xl font-medium'>Congrats! Your Ultimate AI generates Resume is ready !</h1>
                    <p className='text-white text-center'>Now you are ready to download your resume and you can share unique resume url with your friends and family</p>
                    <div className='flex justify-between px-44 my-10'>
                        <button onClick={handleDownload} className='btn'>Download</button>
                        <RWebShare
                            data={{
                                text: "This is my resume please open url to see",
                                url:import.meta.env.VITE_BASE_URL+'/my-resume'+resumeId+'/view',
                                title:resumeInfo?.firstName+''+resumeInfo?.lastName +"/resume",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button>Share 🔗</button>
                        </RWebShare>
                    </div>
                </div>

            </div>
            <div id='print-area' >
                <ResumePreview></ResumePreview>
            </div>
        </ResumeInfoContext.Provider>
    );
};

export default Viewresume;