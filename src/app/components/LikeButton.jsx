'use client';

import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";

export default function LikeButton(movie) {
  const { favouriteMovies, dispatch } = useContext(FavouritesContext);
    console.log('you want this one -->' + JSON.stringify(favouriteMovies));
    const localMovies = JSON.stringify(favouriteMovies);
    console.log('favourite movies stringified -->' + localMovies);
    const isFavourite = favouriteMovies.some(fav => fav.movie.id === movie.id);
  
    const handleClick = () => {
      if (isFavourite) {
        console.log(movie.id);
        dispatch({type: 'REMOVE_FAVOURITE', id: movie.id})
      } else {
        console.log(movie.id);
        dispatch({type: 'ADD_FAVOURITE', movie
        })
      }
    };
  
    return (
      <button onClick={handleClick}>
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    );
}