'use client';

import FavouritesContextProvider from "../contexts/FavouritesContext";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import MovieCardTest from "../components/MovieCardTest";
import Header from "../components/Header";

import { useState, useEffect } from "react";
import { fetchImdbId, fetchImdbRating } from "../services/apis";
import { useSearchParams } from "next/navigation";

export default function SearchResults(queryParam) {
    const searchParams = useSearchParams();
    const query = searchParams.get('query'); 
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState("");

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
        }
      };

    useEffect(() => {
        const fetchSearchResults = async () => {

            const fetchData = async (query) => {
                try {
                  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
            
                  if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
            
                  const result = await response.json();
                  setSearchResults(Array.isArray(result.results) ? result.results : []); 
                  setError(""); 
                } catch (error) {
                  setError("An error occurred while fetching data. Please try again.");
                }
              };
          let movies = await fetchData(queryParam.searchParams.query);
    
          const moviesWithRatings = await Promise.all(
            movies.map(async (movie) => {
              const imdbId = await fetchImdbId(movie.id);
              const imdbRating = await fetchImdbRating(imdbId);
              return { ...movie, imdbRating };
            })
          );
          setIsLoading(false);
          setSearchResults(moviesWithRatings);
        };
    
        fetchSearchResults(query);
      }, [query]);




  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="search-page">
        <Header/>
          <div>
            <h2>Search Results</h2>
            <MovieCardTest movies={searchResults} />
          </div>
        </main>
      </GenreFilterContextProvider>
        
    </FavouritesContextProvider>
  );
}

