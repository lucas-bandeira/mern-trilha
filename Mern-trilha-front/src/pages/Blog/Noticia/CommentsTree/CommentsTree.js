import React from "react";
import './CommentsTree.css';
import { useState, useEffect } from "react";
export const NoticiasModalCommentsTree = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState)
    
    useEffect(() => {
        const onClick = e => {
            if (el.current !== null && !el.current.contains(e.taget)){
                setIsActive(!isActive)
            }
        }

        //var id = document.getElementById()

        if(isActive){
            window.addEventListener("click", onClick)
            }
        
        return() => {
            window.removeEventListener("click", onClick)
        }
    }, [isActive, el])
    return(
        [isActive, setIsActive]
    )
}

