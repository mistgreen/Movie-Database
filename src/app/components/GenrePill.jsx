'use client';

import { useContext } from "react";
import { GenreFilterContext } from "../contexts/GenreFilterContext";

export default function GenrePill(props) {
  const {genreFilter, dispatch} = useContext(GenreFilterContext);
  const genreSelected = Array.isArray(genreFilter) ? genreFilter.some(genre => genre.id === props.id) : false;
  
  const handleClick = () => {
    console.log("you clicked " + props.name);
    if (genreSelected){
      dispatch({type: 'REMOVE_GENRE', id: props.id})
    } else {
      dispatch({type: 'ADD_GENRE', id: props.id})
    }
  };
        
const plus = <svg className="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
const checkmark = <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

return (
  <div
    key={props.id}
    className={`genre-pill ${genreSelected ? 'selected' : ''}`}
    onClick={handleClick}
  >
    {props.name} 
    {genreSelected ? checkmark : plus}
  </div>
);
}
