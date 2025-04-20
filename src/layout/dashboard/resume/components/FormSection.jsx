import { Button } from "@/components/ui/button";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";

<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import PersonalDetail from './forms/PersonalDetail';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import { Navigate, useParams } from 'react-router-dom';
import Education from './forms/Education';
import Skills from './forms/Skills';


const FormSection = () => {
    const [activeFormIndex, setActiveFormIndex]=useState(1)
    const [enableNext, setEnableNext] = useState(true)
    const {resumeId}=useParams();
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
            {activeFormIndex==1 ? <PersonalDetail  enableNext={(v)=>setEnableNext(v)} /> 
            :activeFormIndex==2? <Summery enableNext={(v)=>setEnableNext(v)} /> 
            :activeFormIndex==3? <Experience enableNext={(v)=>setEnableNext(v)} />
            :activeFormIndex==4? <Education/>
            :activeFormIndex==5? <Skills></Skills>
            :activeFormIndex ==6?<Navigate to={'/my-resume/'+resumeId+'/view'}></Navigate>: null}
            {/* Summary */}

            {/* Experience */}

            {/* Educational Detail */}

            {/* Skills */}
=======
const FormSection = ({ resumeId }) => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          {" "}
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            variant="outline"
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
>>>>>>> 960561600dd80ef16a418d90f0a3b97c0a671f42
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex == 1 ? (
        <PersonalDetail
          resumeId={resumeId}
          enableNext={(v) => setEnableNext(v)}
        />
      ) : activeFormIndex == 2 ? (
        <Summery resumeId={resumeId} enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience enableNext={(v) => setEnableNext(v)} />
      ) : null}
      {/* Summary */}

      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}
    </div>
  );
};

export default FormSection;
