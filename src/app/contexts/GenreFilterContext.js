'use client';

import { createContext, useReducer } from "react";
import { genreFilterReducer } from "../reducers/genreFilterReducer";

export const GenreFilterContext = createContext();

export default function GenreFilterContextProvider({children}) {
    const [genreFilter, dispatch] = useReducer(genreFilterReducer, []);

    return (
        <GenreFilterContext.Provider value={{genreFilter, dispatch}}>
            {children}
        </GenreFilterContext.Provider>
    )
}