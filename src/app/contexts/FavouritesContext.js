import { createContext } from "react";

export const FavouritesContext = createContext();

export default function FavouritesContextProvider () {
    
    return (
        <FavouritesContext.Provider value={{}}>

        </FavouritesContext.Provider>
    )
}