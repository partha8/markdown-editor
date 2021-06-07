import React from "react";
import "./style.css";
import InputArea from "./components/inputArea";
import ResultArea from "./components/resultArea";

function App() {
  return (
    <div className="main-app">
      <InputArea />
      <ResultArea />
    </div>
  );
}

export default App;
