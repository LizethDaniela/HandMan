import React, { useState } from 'react'

export const useWord = () => {
  const listLetters = word.split("").map((item) => {
      item=item.toUpperCase();
      item = {letter: item, status: false};
      return item;
  });
  const [listWord, setListWord] = useState(listLetters);
  const ifContains = (letter)=>{
      //console.log(listWord);
      const newlistWord = listWord.map((item)=>{
          if (item.letter === letter && item.status === false){
              item.status= true;
          }
          return item;
      });
      return newlistWord;
  };
  const isValid =(letter)=>{
      for(let i=0; i<listWord.length; i++){
          let item = listWord[i];
          if(item.letter === letter ){
              return true;
          }
      }
      return false;
    };
  return [listWord, setListWord, ifContains, isValid];
};
