import React, { useState } from 'react';
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, createButton, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg';

const RichTextEditor = ({onRichTextEditorChange}) => {
    const [value, setValue] = useState()
    const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
    return (
        <div>
            <EditorProvider>
                <Editor className='text-white' value={value} onChange={(e) => {
                    setValue(e.target.value)
                    onRichTextEditorChange(e)
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnAlignCenter />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                        
                       
                        
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
};

export default RichTextEditor;