import React from 'react'
import useMarkdownState from '../customHook/useMarkdownState';

const appContext = {
    markdownText: "",
    setMarkdownText: () =>{}
}
export default React.createContext(appContext);