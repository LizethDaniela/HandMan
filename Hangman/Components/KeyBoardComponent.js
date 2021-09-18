import React from 'react'
import { useKeyBoard } from '../Hooks/useKeyBoard';
import { keyComponent } from './keyComponent';

export const KeyBoardComponent = ({hadlerKeyPress}) => {
      const [keyboard, setKeyBoard]=useKeyBoard();
      const handLerKey = (key)=>{
          const newKeyBoard = keyboard.map((item) =>{
            const { key: keyList }= item;
            if (key === keyList){
                item.status= true;
            }
            return item;
          });
          setKeyBoard(newKeyBoard);
          hadlerKeyPress(key);
      }
    return (
       <div className="flex-container">
            {keyboard.map((item) => {
                <keyComponent 
                key={item.id} 
                letter={item.key}
                handLerKey={handLerKey}
                status={item.status}/>
            })}
       </div>
    );
};
