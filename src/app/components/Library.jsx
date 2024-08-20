'use client';

import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";
import FavouriteMovieList from "./FavouriteMovieList";

export default function Library() {
  const { favouriteMovies } = useContext(FavouritesContext);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <FavouriteMovieList favourites={favouriteMovies} />
    </div>
  );
}