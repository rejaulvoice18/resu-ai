import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../../../apiendpoint/GlobalApi";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const Education = ({ enableNext, resumeId }) => {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [educationlist, setEducationList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (e, idx) => {
    const newEntries = educationlist.slice();
    const { name, value } = e.target;
    newEntries[idx][name] = value;
    setEducationList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationList([
      ...educationlist,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const RemoveEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        education: educationlist,
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
        toast("Server error");
      }
    );
  };
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationlist,
    });
  }, [educationlist]);
  return (
    <div>
      <div className="p-5 shadow-lg shadow-gray-400 rounded-lg border-t-gray-400 border-t-4 mt-10">
        <h2 className="font-bold text-lg text-white">Education</h2>
        <p className="text-white">Add Your educational details</p>

        <div>
          {educationlist.map((item, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div className="col-span-2">
                  <label className="text-white">University Name</label>
                  <Input
                    name="universityName"
                    className="text-white text-xs"
                    onChange={(e) => handleChange(e, idx)}
                  ></Input>
                </div>

                <div>
                  <label className="text-white">Degree</label>
                  <Input
                    name="degree"
                    className="text-white text-xs"
                    onChange={(e) => handleChange(e, idx)}
                  ></Input>
                </div>

                <div>
                  <label className="text-white">Major</label>
                  <Input
                    name="major"
                    className="text-white text-xs"
                    onChange={(e) => handleChange(e, idx)}
                  ></Input>
                </div>

                <div>
                  <label className="text-white">Start Date</label>
                  <Input
                    name="startDate"
                    type="date"
                    className="text-white text-xs"
                    onChange={(e) => handleChange(e, idx)}
                  ></Input>
                </div>

                <div>
                  <label className="text-white">End Date</label>
                  <Input
                    name="endDate"
                    type="date"
                    className="text-white text-xs"
                    onChange={(e) => handleChange(e, idx)}
                  ></Input>
                </div>

                <div className="col-span-2">
                  <label className="text-white">Description</label>
                  <Textarea
                    className=" text-white text-xs"
                    name="description"
                    onChange={(e) => handleChange(e, idx)}
                  ></Textarea>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button onClick={AddNewEducation} variant="outline">
              + Add More Education
            </Button>
            <Button onClick={RemoveEducation} variant="outline">
              - Remove
            </Button>
          </div>

          <Button variant="outline" onClick={onSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;
