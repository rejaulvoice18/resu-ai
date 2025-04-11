import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from '../../../../../../apiendpoint/GlobalApi';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../../apiendpoint/AIModal';

const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"

const Summery = ({ enableNext }) => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const [summery, setSummery] = useState()
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState()



    useEffect(() => {
        summery && setResumeInfo({
            ...resumeInfo,
            summery: summery
        })
    }, [summery])

    const GenerateSummeryFromAI = async () => {
        setLoading(true)
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle)
        console.log(PROMPT)
        const result = await AIChatSession.sendMessage(PROMPT)
        console.log(JSON.parse(result.response.text()));
        setAiGeneratedSummeryList(JSON.parse(result.response.text()))
        setLoading(false)
    }

    const onSave = (e) => {
        e.preventDefault()
        setLoading(true)

        const data = {
            data: {
                summery: summery
            }
        }

        GlobalApi.UpdateResumeDetail(params?.resumeId, data)
            .then(resp => {
                console.log(resp);
                enableNext(true)
                setLoading(false);
                toast("Summery updated")
            }, (error) => {
                setLoading(false);
            })

    }
    return (
        <div>
            <div className='p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10'>
                <h2 className='font-bold text-lg text-white'>Summery</h2>
                <h2 className='text-white'>Add Summery for your job title</h2>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label className='text-white'>Add Summery</label>
                        <Button type="button" variant="outline" size="sm"
                            onClick={() => GenerateSummeryFromAI()}
                            className="border-primary text-primary gap-2">
                            <Brain className='h-4 w-4' /> Generate from AI</Button>
                    </div>
                    <Textarea className="mt-5 text-white" required
                        onChange={(e) => setSummery(e.target.value)}
                    />
                    <div className='mt-2 flex justify-end'>
                        <Button type="submit" variant="outline"
                            disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>

            {
                aiGeneratedSummeryList && (
                    <div>
                    <h2 className='font-bold text-lg text-white'>Suggestions</h2>
                    {aiGeneratedSummeryList?.map((item,idx)=>(
                        <div key={idx}
                        onClick={()=>setSummery(item?.summary)}
                        className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'
                        >
                            <h2 className='font-bold my-1 text-white'>Level: {item?.experience_level}</h2>
                            <p className='text-white'>{item?.summary}</p>
                        </div>
                    ))}
                </div>
                )
            }

        </div>
    );
};

export default Summery;