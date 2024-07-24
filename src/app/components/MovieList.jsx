const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
  };

async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    let data = await response.json();
    return data._embedded.movies;
  }
  
  export default async function MovieList() {
    let movies = await fetchMovies();
  
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.key} {...movie} />
        ))}
      </div>
    );
  }
  