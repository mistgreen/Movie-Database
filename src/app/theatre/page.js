import Filter from "../components/Filter";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import MovieListTest from "../components/MovieListTest";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import Header from "../components/Header";

export default function Theatre() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="movie-page">
        <Header/>
        <div className="title">
          <h2>Currently in Theatres</h2>
        </div>
        <div className="movie-content">
          <div className="left-bar">
            <Filter />
            </div>
            <div className="right-bar">
              
            <MovieListTest urlPath={'discover/movie?language=en-US&page=1&region=GB&with_release_type=2'}/>
            </div>
            </div>
        </main>
      </GenreFilterContextProvider>
        
    </FavouritesContextProvider>
  );
}

