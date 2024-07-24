import MovieCard from "./MovieCard";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzYzYzU3ZDJiNzNmYThmM2VlMDkzOWMwNGQ5NWRkNyIsIm5iZiI6MTcyMTY1NzUyNS4wNDkxODQsInN1YiI6IjY2OWU2MzllNGVlN2Y5ZjBlZGRkMjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuRV0obsm_CMwerAVsYtoxe0mJ7UKGPDA8B7xnhLgPc'
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