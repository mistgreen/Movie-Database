import Header from "./components/Header";
import Footer from "./components/Footer";
import FavouritesContextProvider from "./contexts/FavouritesContext";
import Filter from "./components/Filter";
import GenreFilterContextProvider from "./contexts/GenreFilterContext";
import MovieListTest from "./components/MovieListTest";

export default function Home() {
  return (
    <FavouritesContextProvider>
      <GenreFilterContextProvider>
        <main className="main-page">
      
            <Header/>

          {/* <div className="left-bar">
            <Filter/>
          </div> */}
          <div className="home-content">
            <h2>Trending movies today</h2>
            <MovieListTest className="movie-list" urlPath ={'trending/movie/day?language=en-US'}/>
            <h2>Currently in cinemas</h2>
            <MovieListTest className="movie-list" urlPath = {'discover/movie?language=en-US&page=1&region=GB&with_release_type=2'}/>
          </div>

            <Footer/>

        </main>
      </GenreFilterContextProvider>
    </FavouritesContextProvider>
  );
}
