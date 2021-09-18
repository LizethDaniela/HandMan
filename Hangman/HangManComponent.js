import React from 'react'
import { DrawComponent } from './Components/DrawComponent';
import { KeyBoardComponent } from './Components/KeyBoardComponent'
import { WordComponent } from './Components/WordComponent';
import { useCounter } from './Hooks/useCounter';
import { useWord } from './Hooks/useWord';
import "./styles.css";
export const  HangManComponent= () => {
    const [listWord, setListWord, ifContains, isValid]= useWord("breaking bad");
    const [counter, , decrementCounter]=useCounter(6, {max:6, min:0});
 //useEffect(() => {}, [letter]);
    const handlerKeyPress = (key)=>{
        setListWord(list);
        if (!isValid(key)){
            decrementCounter();
        }
    };
    return (
        <div>
            <h1>Hangman</h1>
            <hr />
            <DrawComponent counter={counter}/>
            <WordComponent listWord={listWord}/>
            <KeyBoardComponent handlerKeyPress={handlerKeyPress} />
        </div>
    );
};
