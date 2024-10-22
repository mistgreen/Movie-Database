import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import ActorCard from "../components/ActorCard";
import FavouritesContextProvider from "../contexts/FavouritesContext";

import {fetchAllMovieData, fetchMovie, fetchRecommendations} from "../services/movieApis"; 
import { fetchImdbId, fetchImdbRating } from "../services/apis";
import LikeButton from "../components/LikeButton";
import formatDate from "../helpers/dateFormatter";

export default async function Movie({params}) {
  const id  = params.movie;
  const movie = await fetchMovie(id);
  const imdbId = await fetchImdbId(id);
  const imdbRating = await fetchImdbRating(imdbId);

  const recommendedMovies = await fetchRecommendations(id);
  
  const recommendedMoviesWithRatings = await Promise.all(
    recommendedMovies.map(async (movie) => {
      try {
        const imdbId = await fetchImdbId(movie.id);
        const imdbRating = await fetchImdbRating(imdbId);
        return { ...movie, imdbRating };
      } catch (error) {
        console.error("Error fetching IMDb data:", error);
        return { ...movie, imdbRating: "Not Available" };
      }
    })
  );

  const movieDetails = await fetchAllMovieData(id);

  function imdbFormatter(imdbRating) {
    return imdbRating ? imdbRating : "Not available";
  }

  // const imdbFormatter = (imdbRating) => {

  //   return imdbRating ? imdbRating.toFixed(1) : "Not available";
  // };

  const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;
  const backdropPath = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : null;
  const releaseYear = formatDate(movie.release_date);
  const formattedImdbRating = imdbFormatter(imdbRating);


    return (
      <FavouritesContextProvider>
        <div>
          <div>
            <Header/>
        </div>
        <div className="movie-details-page">
          <h1>{movie.title}</h1>
          <div className="movie-details-wrapper">
            {backdropPath && 
            <img className="movie-poster" src={backdropPath} alt={`${movie.title} poster`} />
            }
            <div className="movie-details-text-wrapper">
              <div className="movie-information-overview">
                <div className="release-year"><p>{releaseYear}</p></div>
                <div className="imdb-rating"><p>{formattedImdbRating}</p> </div>
              </div>
              <div className="movie-summary"><p>{movie.overview}</p></div> 
              <div className="bookmark-button">
                <LikeButton {...movie}/>
              </div>
            </div>
          </div>
        </div>
        <div className="cast-information">
          <h3>Cast</h3>
          <div className="cast-list">
            { movieDetails.credits.cast.map((actor) => (
            <ActorCard className="movie-card" key={actor.cast_id} {...actor}/>
            )) 
            }
          </div> 
        </div>

        <div className="home-content">
          <h3>If you like {movie.title}, you might like...</h3>
          <div className='inner-movie-list'>
            {recommendedMoviesWithRatings && recommendedMoviesWithRatings.length > 0 ? (
              recommendedMoviesWithRatings.map((movie) => (
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

  