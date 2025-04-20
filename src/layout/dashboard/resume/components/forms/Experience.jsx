import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
const Experience = ({ enableNext }) => {
  const [experienceList, setExperienceList] = useState([formField]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]);
  const handleChange = (idx, event) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[idx][name] = value;
    setExperienceList(newEntries);
  };

  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]); // clone object
  };
  const RemoveExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };
  //   useEffect(() => {
  //     console.log(experienceList);
  //   }, [experienceList]);
  useEffect(() => {
    console.log(experienceList);
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);
  return (
    <div>
      <div className="p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10">
        <h2 className="font-bold text-lg text-white">
          Professional Experience
        </h2>
        <p className="text-white">Add Your previous Job Experience</p>
        <div>
          {experienceList.map((item, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs text-white">Position Title</label>
                  <Input
                    name="title"
                    className="text-white"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white ">Company Name</label>
                  <Input
                    className="text-white"
                    name="companyName"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white">City</label>
                  <Input
                    name="city"
                    className="text-white"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white">State</label>
                  <Input
                    name="state"
                    className="text-white"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    className="text-white"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div>
                  <label className="text-xs text-white">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    className="text-white"
                    onChange={(event) => handleChange(idx, event)}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    idx={idx}
                    value={experienceList[idx].workSummery}
                    onRichTextEditorChange={(value) =>
                      handleRichTextEditor(value, "workSummery", idx)
                    }
                    className="text-white"
                  ></RichTextEditor>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button onClick={AddNewExperience} variant="outline">
              + Add More Experience
            </Button>
            <Button onClick={RemoveExperience} variant="outline">
              - Remove
            </Button>
          </div>

          <Button variant="outline">Save</Button>
        </div>
      </div>
    </div>
  );
};
export default Experience;
// fixed conflict
