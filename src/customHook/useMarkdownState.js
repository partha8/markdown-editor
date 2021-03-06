import  { useState, useEffect } from 'react'

function useMarkdownState(defaultText,key) {
    const [markdownText,setMarkdownText]=useState(()=>{
        const text=window.localStorage.getItem(key);

        return text ? JSON.parse(text) : defaultText;
    });

    useEffect(() => {
        window.localStorage.setItem(key,JSON.stringify(markdownText)) //takes the object and converts it into a string
    }, [key,markdownText]);

    return [markdownText,setMarkdownText];
}
 
export default useMarkdownState
