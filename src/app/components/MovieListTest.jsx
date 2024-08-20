'use client'
import React, { useState, useEffect, useContext } from "react";
import MovieCardTest from "./MovieCardTest";
import { fetchMovies, fetchImdbId, fetchImdbRating } from "../services/apis";
import GenreFilterContextProvider, { GenreFilterContext } from "../contexts/GenreFilterContext";

export default function MovieListTest(urlPath) {
  const {genreFilter} = useContext(GenreFilterContext);
  const [moviesWithRatings, setMoviesWithRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const genreIds = genreFilter.map((genre) => genre.id).join(',');

  useEffect(() => {
    const fetchAndSetMovies = async () => {

      const fetchUrl = genreFilter.length
        ? { urlPath: `${urlPath.urlPath}&with_genres=${genreIds}` }
        : urlPath ;

      let movies = await fetchMovies(fetchUrl);

      const moviesWithRatings = await Promise.all(
        movies.map(async (movie) => {
          const imdbId = await fetchImdbId(movie.id);
          const imdbRating = await fetchImdbRating(imdbId);
          return { ...movie, imdbRating };
        })
      );
      setIsLoading(false);
      setMoviesWithRatings(moviesWithRatings);
    };

    fetchAndSetMovies();
  }, [genreFilter]);

  return (
    <div>
      <GenreFilterContextProvider>
      <div>
        {isLoading && <div>Loading...</div>}
        <MovieCardTest movies={moviesWithRatings} />
        </div>
      </GenreFilterContextProvider>
    </div>
  );
}
