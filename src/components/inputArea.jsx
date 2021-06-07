import React, {useContext} from 'react'
import "../style.css"
import editorContext from "../context/appContext"

const InputArea= () =>  {
    
    const {setMarkdownText} = useContext(editorContext)

    const changeHandler= (e) =>{
        let value=e.target.value;
        setMarkdownText(value);
    }
    return (
        <textarea onChange={changeHandler} className="input-main">
        </textarea>
    )
}

export default InputArea
