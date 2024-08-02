'use client';

import useFavourites from "../hooks/useFavourites";

export default function LikeButton(movie) {
    const {favourites, addFavourite, removeFavourite} = useFavourites();

    const isFavourite = favourites.some(fav => fav.id === movie.id);
  
    const handleClick = () => {
      if (isFavourite) {
        removeFavourite(movie.id);
      } else {
        addFavourite(movie);
      }
    };
  
    return (
      <button onClick={handleClick}>
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    );
}