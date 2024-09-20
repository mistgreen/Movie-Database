'use client';

import FavouritesContextProvider from "../contexts/FavouritesContext";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import Header from "../components/Header";
import { Suspense } from "react";
import SearchResult from "../components/SearchResult";



export default function SearchResults() {
 

  return (
      <FavouritesContextProvider>
      <GenreFilterContextProvider>
       
        <main className="search-page">

            <Header/>
          <h2>Search Results</h2>
          <Suspense>
            <SearchResult/>
          </Suspense>
          
        </main>
    
      </GenreFilterContextProvider>
    </FavouritesContextProvider>
  );
}
