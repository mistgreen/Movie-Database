import Footer from "./components/Footer";
import Library from "./components/Library";
import MovieList from "./components/MovieList";
import Link from "next/link";
import Search from "./components/Search";
import FavouritesContextProvider from "./contexts/FavouritesContext";

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
          <Link href="/profile" className="profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </Link>
          <h2>Trending</h2>
          <MovieList urlPath ={'trending/movie/day?language=en-US' }/>
          <h2>At The Cinema</h2>
          <MovieList urlPath = {'movie/now_playing?language=en-US&page=1&region=GB'}/>
          <h2>Top Rated</h2>
          <h2>Popular Genres</h2>
        </div>
      </main>
    </FavouritesContextProvider>
  );
}
