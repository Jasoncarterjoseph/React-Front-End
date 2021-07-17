import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import TopNavigation from "./TopNavigation";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJs, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons'


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
        </html>`
      );
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
      <Tabs className="titlecolor">
        <TabList>
          <Tab>
            <div>
             HTML <FontAwesomeIcon icon={faHtml5} />
            </div>
          </Tab>
          <Tab>
            <div>
              CSS <FontAwesomeIcon icon={faCss3Alt} />
            </div>
          </Tab>
          <Tab>
            <div>
              JS <FontAwesomeIcon icon={faJs} />
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="layer layer-top">
            <Editor
              title="HTML EDITOR"
              language="xml"
              value={html}
              onChange={setHtml}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="layer layer-top">
            <Editor
              title="CSS EDITOR"
              language="css"
              value={css}
              onChange={setCss}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="layer layer-top">
            <Editor
              title="JS EDITOR"
              language="javascript"
              value={js}
              onChange={setJs}
            />
          </div>
        </TabPanel>
      </Tabs>
      <div className="layer">
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
