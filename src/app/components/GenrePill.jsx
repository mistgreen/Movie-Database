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
        

  return (
    <div key={props.id}
    className={`genre-pill ${genreSelected ? 'selected' : ''}`}
    onClick={handleClick}>
      {genreSelected ? `${props.name} selected` : `${props.name}`}
    </div>
  );
}
