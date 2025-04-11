
import { Button } from '@/components/ui/button';
import PersonalDetail from './forms/PersonalDetail';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';


const FormSection = () => {
    const [activeFormIndex, setActiveFormIndex]=useState(1)
    const [enableNext, setEnableNext] = useState(false)

    return (
        <div>
            <div className='flex justify-between items-center'>
                <Button variant="outline" size="sm" className="flex gap-2"> <LayoutGrid /> Theme</Button>
                <div className='flex gap-2'>
                    {activeFormIndex>1&&<Button variant="outline" size="sm"
                    onClick={()=>setActiveFormIndex(activeFormIndex-1)}
                    ><ArrowLeft /></Button>}
                    <Button 
                    disabled={!enableNext}
                    variant="outline" className="flex gap-2" size="sm"
                    onClick={()=>setActiveFormIndex(activeFormIndex+1)}
                    >Next <ArrowRight /></Button>
                </div>
            </div>
            {/* Personal Detail */}
            {activeFormIndex==1 ? <PersonalDetail  enableNext={(v)=>setEnableNext(v)} /> :null}
            {/* Summary */}

            {/* Experience */}

            {/* Educational Detail */}

            {/* Skills */}
        </div>
    );
};

export default FormSection;