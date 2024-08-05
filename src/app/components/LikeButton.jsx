'use client';

import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";

export default function LikeButton(movie) {
  const { favouriteMovies, dispatch } = useContext(FavouritesContext);

    const isFavourite = Array.isArray(favouriteMovies) ? favouriteMovies.some(fav => fav.movie.id === movie.id) : false;

    const handleClick = () => {
      if (isFavourite) {
        dispatch({type: 'REMOVE_FAVOURITE', id: movie.id})
      } else {
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
