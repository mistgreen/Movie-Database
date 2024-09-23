import { useState, useEffect } from "react";
import { fetchImdbId, fetchImdbRating } from "../services/apis";
import { useSearchParams } from "next/navigation";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import MovieCardTest from "./MovieCardTest";

export default function SearchResult() {
        const searchParams = useSearchParams();
        const query = searchParams.get('query'); 
        const [searchResults, setSearchResults] = useState([]);
        const [error, setError] = useState("");
        const [isLoading, setIsLoading] = useState(true);
      
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
          }
        }
        
      
        useEffect(() => {
          const fetchSearchResults = async () => {
            try {
              setIsLoading(true); 
              const fetchData = async (query) => {
                try {
                  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
                  
                  if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  
                  const result = await response.json();
                  return Array.isArray(result.results) ? result.results : []; 
                } catch (error) {
                  console.error("Error fetching data:", error);
                  setError("An error occurred while fetching data. Please try again.");
                  return [];
                }
              };
      
              const movies = await fetchData(query);
              console.log("movies -->", movies);
              console.log("query -->", query);
      
       
              const moviesWithRatings = await Promise.all(
                movies.map(async (movie) => {
                  try {
                    const imdbId = await fetchImdbId(movie.id);
                    const imdbRating = await fetchImdbRating(imdbId);
                    return { ...movie, imdbRating };
                  } catch (error) {
                    console.error("Error fetching IMDb data:", error);
                    return { ...movie, imdbRating: "Not available" };
                  }
                })
              );
      
              setSearchResults(moviesWithRatings);
            } catch (error) {
              console.error("Error in fetchSearchResults:", error);
              setError("An error occurred while fetching data. Please try again.");
              setSearchResults([]); 
            } finally {
              setIsLoading(false); 
            }
          };
      
          if (query) {
            fetchSearchResults();
          }
        }, [query]);
    
    return (
        <FavouritesContextProvider>
        <GenreFilterContextProvider>
         
          <main className="search-results">
            {isLoading && <p>Loading...</p>} 
            {error && <p>{error}</p>} 
            {!isLoading && !error && searchResults.length === 0 && <p>No results found.</p>} 
  
            <div className="right-bar">
                <MovieCardTest movies={searchResults} />
            </div>
          </main>
      
        </GenreFilterContextProvider>
      </FavouritesContextProvider>
    )
}