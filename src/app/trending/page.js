import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import Filter from "../components/Filter";
import LoadMoreButton from "../components/LoadMoreButton";
import GenreFilterContextProvider from "../contexts/GenreFilterContext";
import Header from "../components/Header";

export default function Trending() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="movie-page">
          <Header/>
          <div className="title">
            <h2>Trending Movies</h2>
          </div>
          <div className="movie-content">
            <div className="left-bar">
              <Filter/>
            </div>
            <div className="right-bar">
              <MovieList urlPath ={'trending/movie/day?language=en-US' }/>
                <div>
                  <LoadMoreButton/>
                </div>
            </div>
          </div>
          <Footer/>
        </main>
      </GenreFilterContextProvider>
    </FavouritesContextProvider>
  );
}