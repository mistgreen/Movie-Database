'use client';

import { useContext, useEffect, useState } from "react";
// import useFavourites from "../hooks/useFavourites";
import { FavouritesContext } from "../contexts/FavouritesContext";
import FavouriteMovieList from "./FavouriteMovieList";

export default function Library() {
  const { favouriteMovies } = useContext(FavouritesContext);
  // const {favourites, addToFavourites} = useFavourites();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('favouriteMovies')));
    //  const movies = JSON.parse(localStorage.getItem('favourites'));
    //  return movies;
    const savedFavourites = localStorage.getItem('favouriteMovies');
    if (savedFavourites) {
    setMovies(JSON.parse(localStorage.getItem('favouriteMovies')));
    }
  }, []);

  return (
    <div>
      <h2>Your Favourites</h2>
      <FavouriteMovieList favourites={movies} />
    </div>
  );
}