import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import { AIChatSession } from "../../../../../apiendpoint/AIModal";
import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { toast } from "sonner";

const PROMPT =
  "position title: {positionTitle}, Depends on position title give me 5-7 bullet points for my experience in resume, give me result in HTML format";

const RichTextEditor = ({ onRichTextEditorChange, idx }) => {
  const [value, setValue] = useState("");
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  // const GenerateSummary = async () => {
  //   setLoading(true);

  //   if (!resumeInfo.experience[idx].title) {
  //     toast("Please Add Position Title");
  //     setLoading(false);
  //     return;
  //   }

  //   const prompt = PROMPT.replace(
  //     "{positionTitle}",
  //     resumeInfo.experience[idx].title
  //   );

  //   try {
  //     const result = await AIChatSession.sendMessage(prompt);
  //     const text = await result.response.text();
  //     const resp = text.replace("[", "").replace("]", "");
  //     console.log(resp);

  //     setValue(resp); // Set value for text editor
  //     onRichTextEditorChange(value, "workSummery", idx); // Update parent state too
  //   } catch (err) {
  //     toast("Failed to generate summary");
  //     console.error("AI Summary Error:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const GenerateSummary = async () => {
  //   setLoading(true);

  //   if (!resumeInfo.experience[idx].title) {
  //     toast("Please Add Position Title");
  //     setLoading(false);
  //     return;
  //   }

  //   const prompt = PROMPT.replace(
  //     "{positionTitle}",
  //     resumeInfo.experience[idx].title
  //   );

  //   try {
  //     const result = await AIChatSession.sendMessage(prompt);
  //     const text = await result.response.text();

  //     // Try parsing bullet points safely from response
  //     let formattedHTML = "";

  //     try {
  //       const parsed = JSON.parse(text);
  //       if (Array.isArray(parsed)) {
  //         formattedHTML = `<ul>${parsed
  //           .map((item) => `<li>${item}</li>`)
  //           .join("")}</ul>`;
  //       } else if (
  //         parsed.bullet_points &&
  //         Array.isArray(parsed.bullet_points)
  //       ) {
  //         formattedHTML = `<ul>${parsed.bullet_points
  //           .map((item) => `<li>${item}</li>`)
  //           .join("")}</ul>`;
  //       } else {
  //         formattedHTML = `<p>${text}</p>`; // fallback if not expected format
  //       }
  //     } catch (err) {
  //       // fallback if JSON parsing fails — try removing brackets manually
  //       const cleaned = text.replace(/^\[|\]$/g, "").replace(/"/g, "");
  //       const items = cleaned.split("\n").filter((line) => line.trim());
  //       formattedHTML = `<ul>${items
  //         .map((item) => `<li>${item.trim()}</li>`)
  //         .join("")}</ul>`;
  //     }

  //     setValue(formattedHTML);
  //     onRichTextEditorChange(formattedHTML, "workSummery", idx);
  //   } catch (err) {
  //     toast("Failed to generate summary");
  //     console.error("AI Summary Error:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const GenerateSummary = async () => {
    setLoading(true);

    if (!resumeInfo.experience[idx].title) {
      toast("Please Add Position Title");
      setLoading(false);
      return;
    }

    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.experience[idx].title
    );

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const text = await result.response.text();

      // Try parsing bullet points safely from response
      let formattedHTML = "";

      try {
        let parsed = JSON.parse(text);

        // Handle stringified JSON inside a string
        if (typeof parsed === "string") {
          parsed = JSON.parse(parsed);
        }

        if (Array.isArray(parsed)) {
          formattedHTML = `<ul>${parsed
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>`;
        } else if (
          parsed.bullet_points &&
          Array.isArray(parsed.bullet_points)
        ) {
          formattedHTML = `<ul>${parsed.bullet_points
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>`;
        } else {
          formattedHTML = `<p>${text}</p>`; // fallback if not expected format
        }
      } catch (err) {
        // fallback if JSON parsing fails — try removing brackets manually
        const cleaned = text.replace(/^\[|\]$/g, "").replace(/"/g, "");
        const items = cleaned.split("\n").filter((line) => line.trim());
        formattedHTML = `<ul>${items
          .map((item) => `<li>${item.trim()}</li>`)
          .join("")}</ul>`;
      }

      setValue(formattedHTML);
      onRichTextEditorChange(formattedHTML, "workSummery", idx);
    } catch (err) {
      toast("Failed to generate summary");
      console.error("AI Summary Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-2 flex justify-between items-center">
        <label className="text-xs text-white">Summary</label>
        <Button
          variant="outline"
          onClick={GenerateSummary}
          className="flex gap-2 border-white"
        >
          {loading ? (
            <LoaderCircle className="animate-spin"></LoaderCircle>
          ) : (
            <>
              <Brain className="h-4 w-4"></Brain>Generate summary
            </>
          )}
        </Button>
      </div>
      <EditorProvider className="text-black">
        <Editor
          className="text-black"
          value={value}
          onChange={(e) => {
            const html = e.target.value;
            setValue(html);
            onRichTextEditorChange(html, "workSummery", idx); // value pass করা হয়েছে
          }}
        >
          <Toolbar>
            <BtnBold></BtnBold>
            <BtnItalic></BtnItalic>
            <BtnUnderline></BtnUnderline>
            <BtnStrikeThrough></BtnStrikeThrough>
            <BtnBulletList></BtnBulletList>
            <Separator></Separator>
            <BtnLink></BtnLink>
            <BtnStyles></BtnStyles>
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
