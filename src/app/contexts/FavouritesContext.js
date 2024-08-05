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
