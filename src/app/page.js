import Footer from "./components/Footer";
import Library from "./components/Library";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import FavouritesContextProvider from "./contexts/FavouritesContext";
import Filter from "./components/Filter";
import GenreFilterContextProvider from "./contexts/GenreFilterContext";

export default function Home() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
      <main className="main-page">
        <div className="left-bar">
          <Search/>
          <Library/>
          <Footer/>
        </div>
        <div className="right-bar">
          <Filter/>
          <h2>Trending</h2>
          <MovieList urlPath ={'trending/movie/day?language=en-US'}/>
          <h2>In Theatres</h2>
          <MovieList urlPath = {'movie/now_playing?language=en-US&page=1&region=GB'}/>
        </div>
      </main>
      </GenreFilterContextProvider>
    </FavouritesContextProvider>
  );
}
