
import MovieCard from "./MovieCard";
import { fetchMovies, fetchImdbId, fetchImdbRating } from "../services/apis"

export default async function MovieList(urlPath) {
    let movies = await fetchMovies(urlPath);
    
    const moviesWithRatings = await Promise.all(
      movies.map(async (movie) => {
        const imdbId = await fetchImdbId(movie.id);
        const imdbRating = await fetchImdbRating(imdbId);
        return { ...movie, imdbRating : imdbRating };
      })
    );
  
    return (
      <div>
        <div className="movie-list">
          {moviesWithRatings.map((movie) => (
            <MovieCard className="movie-card" key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
}
