import Footer from "./components/Footer";
import Library from "./components/Library";
import MovieList from "./components/MovieList";
import Link from "next/link";
import Search from "./components/Search";
import FavouritesContextProvider from "./contexts/FavouritesContext";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <FavouritesContextProvider>
      <main className="main-page">
        <div className="left-bar">
          <Search/>
          <Library/>
          <Footer/>
        </div>
        <div className="right-bar">
          <Filter/>
          <h2>Trending</h2>
          <MovieList urlPath ={'trending/movie/day?language=en-US' }/>
          <h2>At The Cinema</h2>
          <MovieList urlPath = {'movie/now_playing?language=en-US&page=1&region=GB'}/>
          <h2>Top Rated</h2>
          <h2>All Movies</h2>
        </div>
      </main>
    </FavouritesContextProvider>
  );
}
