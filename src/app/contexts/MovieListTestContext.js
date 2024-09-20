'use client';

import { createContext, useEffect, useReducer } from "react";
import { movieListTestReducer } from "../reducers/movieListTestReducer";

export const MovieListTestContext = createContext();

export default function MovieListContextProvider({children}) {
    const [state, dispatch] = useReducer(movieListTestReducer, []);
    console.log("Movie 2--->" + genreFilter);

    useEffect(() => {
         
    }, []);

    return (
        <MovieListTestContext.Provider value={{state, dispatch}}>
            {children}
        </MovieListTestContext.Provider>
    )
}