import React from 'react'
import { useWord } from '../Hooks/useWord';
import { LetterComponent } from './LetterComponent';

export const WordComponent = ({listWord}) => {
    //const [listWord, ifContains] = useWord("breaking bad");
    
    //    if (letter !== ""){
     //       ifContains(letter);
     //   }
    //ifContains(letter);
    return (<div className="word">
        {listWord.map((item)=>(
            <LetterComponent
             key={item.id}
             letter={item.letter}
             status={item.status} />
        ))}
    </div>
    );
};
