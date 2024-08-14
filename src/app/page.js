import Header from "./components/Header";
import Footer from "./components/Footer";
import Library from "./components/Library";
import FavouritesContextProvider from "./contexts/FavouritesContext";
import Filter from "./components/Filter";
import GenreFilterContextProvider from "./contexts/GenreFilterContext";
import MovieListTest from "./components/MovieListTest";

export default function Home() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="main-page">
          <div>
            <Header/>
          </div>
          <div className="left-bar">
            <Library/>
            <Footer/>
          </div>
          <div className="right-bar">
            <Filter/>
            <h2>Trending</h2>
            <MovieListTest urlPath ={'trending/movie/day?language=en-US'}/>
            <h2>In Theatres</h2>
            <MovieListTest urlPath = {'discover/movie?language=en-US&page=1&region=GB&with_release_type=2'}/>
          </div>
        </main>
      </GenreFilterContextProvider>
    </FavouritesContextProvider>
  );
}
