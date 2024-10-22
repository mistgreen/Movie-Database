import MovieCard from "./MovieCard";

export default function MovieCardTest({movies}) {

  return (
        <div className="inner-movie-list">
          {movies.map((movie) => (
            <MovieCard className="movie-card" key={movie.id} {...movie} />
          ))}
        </div>
  );
}