'use client';

import { createContext, useEffect, useReducer } from "react";
import { genreFilterReducer } from "../reducers/genreFilterReducer";

export const GenreFilterContext = createContext();

export default function GenreFilterContextProvider({children}) {
    const [genreFilter, dispatch] = useReducer(genreFilterReducer, []);
    console.log("genrefilter 2--->" + genreFilter);

    useEffect(() => {
         
    }, []);

    return (
        <GenreFilterContext.Provider value={{genreFilter, dispatch}}>
            {children}
        </GenreFilterContext.Provider>
    )
}