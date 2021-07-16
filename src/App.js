import React, {useEffect,useState } from "react";
import Editor from "./components/Editor";
import TopNavigation from './TopNavigation'

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
       `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <>
      <div>
       <TopNavigation />
      </div>
      <div className="pane top-pane">
       <Editor FontAwesomeIcon title="HTML" language="xml" value={html} onChange={setHtml}/>
       <Editor title="CSS" language="css" value={css} onChange={setCss}/>
       <Editor title="JS" language="javascript" value={js} onChange={setJs}/>
      </div>
      <div className="pane">
      <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />      
      </div>
    </>
  );
};

export default App;