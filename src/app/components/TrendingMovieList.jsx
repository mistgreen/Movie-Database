import MovieCard from "./MovieCard";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

async function fetchTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    let data = await response.json();
    return data.results;
}

  
  export default async function TrendingMovieList() {
    let movies = await fetchTrendingMovies();
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard className="movie-card" key={movie.id} {...movie} />
        ))}
      </div>
    );
  }