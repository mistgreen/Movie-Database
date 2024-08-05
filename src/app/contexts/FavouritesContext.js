'use client';

import { createContext, useEffect, useReducer, useState } from "react";
import { favouriteMovieReducer } from "../reducers/favouriteMovieReducer";

export const FavouritesContext = createContext();

export default function FavouritesContextProvider({children}) {
    const [favouriteMovies, dispatch] = useReducer(favouriteMovieReducer, [], () => {
        if (typeof window !== 'undefined') {
          const localData = localStorage.getItem('favouriteMovies');
          return localData ? JSON.parse(localData) : [];
        }
        // return [];
      });

    useEffect(() => {
        localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies)) 
    }, [favouriteMovies]);

    return (
        <FavouritesContext.Provider value={{favouriteMovies, dispatch}}>
            {children}
        </FavouritesContext.Provider>
    )
}

    // function addFavouriteMovie(movie) {
    //     setFavouriteMovies([...favouriteMovies, {movie}])
    // };

    // function removeFavouriteMovie(movieId) {
    //     setFavouriteMovies(favouriteMovies.filter(movie => movie.id !== movieId))
    // };