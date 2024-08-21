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
      <button 
      className={`like-button ${isFavourite ? 'favourited' : ''}`}
      onClick={handleClick}>
        {isFavourite ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
          </svg>
      :  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
      
      }
        {/* {isFavourite ? 'Remove from Watchlist' : 'Add to Watchlist'} */}
      </button>
    );
}
