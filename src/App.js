import React, { useState } from "react";
import "./style.css";
import InputArea from "./components/inputArea";
import ResultArea from "./components/resultArea";
import EditorContext from "./context/appContext"

function App() {
  
  const [markdownText,setMarkdownText]=useState("");
  
  return (
    <EditorContext.Provider value={{markdownText,setMarkdownText}}>
      <header>
        <h1>Markdown Editor</h1>
      </header>
      <div className='text-area'>
        <h2>Markdown Text</h2>
        <h2 >Converted text</h2>
      </div>
      <div className="component-render">
        <InputArea />
        <ResultArea />
      </div>
    </EditorContext.Provider>
  );
}

export default App;
