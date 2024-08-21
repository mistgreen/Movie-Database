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
      console.log(movies);
      const moviesWithRatings = await Promise.all(
        movies.map(async (movie) => {
          try {
            const imdbId = await fetchImdbId(movie.id);
            const imdbRating = await fetchImdbRating(imdbId);
            return { ...movie, imdbRating };
          } catch (error) {
            console.error("Error fetching IMDb data:", error);
            return { ...movie, imdbRating: "N/A" };
          }
        })
      );
      setIsLoading(false);
      setMoviesWithRatings(moviesWithRatings);
    };

    fetchAndSetMovies();
  }, [genreFilter]);

  return (
    <div className="movie-list">
      {/* <GenreFilterContextProvider> */}

        {isLoading && <div>Loading...</div>}
        <MovieCardTest movies={moviesWithRatings} />

      {/* </GenreFilterContextProvider> */}
    </div>
  );
}
