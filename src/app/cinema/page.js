import Footer from "../components/Footer";
import Library from "../components/Library";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import Filter from "../components/Filter";
import FavouritesContextProvider from "../contexts/FavouritesContext";
import MovieListTest from "../components/MovieListTest";


export default function Cinema() {


  return (
    <FavouritesContextProvider>
      <main className="main-page">
      <div className="left-bar">
        <Search />
        <Library />
        <Footer />
      </div>
      <div className="right-bar">
        <Filter />
        <h2>At the Cinema</h2>
        <MovieList urlPath={'movie/now_playing?language=en-US&page=1&region=GB'} />
        <MovieListTest urlPath={'movie/now_playing?language=en-US&page=1&region=GB'}/>
      </div>
    </main>
    </FavouritesContextProvider>
    
  );
}

