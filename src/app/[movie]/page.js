import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import FavouritesContextProvider from "../contexts/FavouritesContext";

import {fetchMovie, fetchRecommendations} from "../services/movieApis"; 

export default async function Movie({params}) {
  const id  = params.movie;
  const movie = await fetchMovie(id);
  const recommendedMovies = await fetchRecommendations(id);
  

  const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;
  const backdropPath = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : null;

    return (
      <FavouritesContextProvider>
    <div>
      <div>
        <Header/>
      </div>
      <div>
        {posterPath && 
          <img className="movie-poster" src={backdropPath} alt={`${movie.title} poster`} />
        }
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        
      </div>

        <div>
          <h3>If you like {movie.title}, you might like...</h3>
          <div className='movie-list'>
            {recommendedMovies && recommendedMovies.length > 0 ? (
              recommendedMovies.map((movie) => (
                <MovieCard className="movie-card" key={movie.id} {...movie} />
              ))
              ) : (
                <p>No recommended movies available.</p>
              )}
          </div>
        </div>
        <Footer/>
    </div>
    </FavouritesContextProvider>
    );
  }

  