import React from 'react'

export const keyComponent = ({letter, handlerKey, status}) => {
    return (
    <div 
    className={status ? "disablediv":""}
    onClick={()=>{
        handlerKey(letter);
    }}>
        
        {letter}
        </div>
    );
};
