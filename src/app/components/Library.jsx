'use client';

import { useEffect, useState } from "react";
import useFavourites from "../hooks/useFavourites";
import Link from 'next/link';
import MovieListTwo from "./MovieList2";

export default function Library() {
  const {favourites, addToFavourites} = useFavourites();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('favourites')));
    //  const movies = JSON.parse(localStorage.getItem('favourites'));
    //  return movies;
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
    setMovies(JSON.parse(localStorage.getItem('favourites')));
    }
  }, []);

  return (
    <div>
      <h2>Your Favourites</h2>
      <MovieListTwo favourites={movies} />
    </div>
  );
}