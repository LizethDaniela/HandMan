import React from 'react'
import { useCounter } from '../Hooks/useCounter';
export const DrawComponent = ({counter}) => {
    
    return (
        <div>
            <img width="500px" src={`/Assets/img${counter}.png`} alt=""/>
        </div>
    );
};
