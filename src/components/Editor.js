import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CdEditor } from "react-codemirror2";
import { Launch,TransitEnterexit } from "@material-ui/icons";


const Editor = ({language,title,value,onChange}) => {
    const [open, setOpen] = useState(true);
    function handleChange(editor, data, value) {
        onChange(value);
      }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
          {title}
        <button  onClick={() => setOpen((prevOpen) => !prevOpen)} className="expand-collapse-btn">
          {open ? <TransitEnterexit /> : <Launch />}
        </button >
      </div>
      <CdEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "dracula",
          lineNumbers: true,
        }}/>
    </div>
  );
};

export default Editor;