import Filter from "../components/Filter";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import MovieListTest from "../components/MovieListTest";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import Header from "../components/Header";

export default function Theatre() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="main-page">
        <Header/>
          <div>
            <Filter />
            <h2>Currently in Theatres</h2>
            <MovieListTest urlPath={'discover/movie?language=en-US&page=1&region=GB&with_release_type=2'}/>
          </div>
        </main>
      </GenreFilterContextProvider>
        
    </FavouritesContextProvider>
  );
}

