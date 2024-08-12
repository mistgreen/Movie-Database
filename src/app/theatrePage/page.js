

import Filter from "../components/Filter";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import MovieListTest from "../components/MovieListTest";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";


export default function Cinema() {


  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="main-page">
        <div>
            <Filter />
            <h2>Threatre Test Page</h2>
            <MovieListTest urlPath={'movie/now_playing?language=en-US&page=1&region=GB'}/>
        </div>
    </main>
      </GenreFilterContextProvider>
      
    </FavouritesContextProvider>
    
  );
}

