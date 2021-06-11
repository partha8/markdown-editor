import React, {useContext} from 'react'
import "../style.css"
import editorContext from "../context/appContext"

const InputArea= () =>  {
    
    const {markdownText,setMarkdownText} = useContext(editorContext)

    const changeHandler= (e) =>{
        let value=e.target.value;
        setMarkdownText(value);
    }
    return (
        <textarea onChange={changeHandler} className="input-main">
            {markdownText}
        </textarea>
    )
}

export default InputArea
