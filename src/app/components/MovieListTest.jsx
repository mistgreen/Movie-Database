'use client'

import React, { useState, useEffect, useContext, useReducer } from "react";
import MovieCardTest from "./MovieCardTest";
import { fetchMovies, fetchImdbId, fetchImdbRating } from "../services/apis";
import { GenreFilterContext } from "../contexts/GenreFilterContext";
import { genreFilterReducer } from "../reducers/genreFilterReducer";

export default function MovieListTest(urlPath) {
  const { genreFilter } = useContext(GenreFilterContext);
  const [ genreState, genreDispatch] = useReducer(genreFilterReducer);
  const [moviesWithRatings, setMoviesWithRatings] = useState([]);

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      console.log(genreFilter);

      let fetchUrl = genreFilter.length ? `${urlPath}/with_genres=${genreFilter}` 
      : urlPath;

      console.log('Final URL Path:', fetchUrl);
      let movies = await fetchMovies(fetchUrl);

      const moviesWithRatings = await Promise.all(
        movies.map(async (movie) => {
          const imdbId = await fetchImdbId(movie.id);
          const imdbRating = await fetchImdbRating(imdbId);
          return { ...movie, imdbRating };
        })
      );

      setMoviesWithRatings(moviesWithRatings);
    };

    fetchAndSetMovies();
  }, [genreState, urlPath]);

  return (
    <div>
      <MovieCardTest movies={moviesWithRatings} />
    </div>
  );
}
