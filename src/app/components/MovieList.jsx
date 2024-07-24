import MovieCard from "./MovieCard";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_TOKEN}`
    }
  };
  
async function fetchMovies() { 
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    let data = await response.json();
    console.log(data);
    return data.results;
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