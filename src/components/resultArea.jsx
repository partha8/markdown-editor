import React, { useContext } from 'react'
import "../style.css"
import editorContext from '../context/appContext'
import ReactMarkdown from "react-markdown"

function ResultArea() {
    const {markdownText}=useContext(editorContext);
    return (
        <ReactMarkdown children={markdownText} className="result-main" ></ReactMarkdown>
    )
}

export default ResultArea
