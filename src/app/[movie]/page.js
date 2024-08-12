import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import FavouritesContextProvider from "../contexts/FavouritesContext";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
  }
};

async function fetchMovie(id) {
  let url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  
  let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
  const data = await response.json();
  return data;
};

async function fetchWatchProviders(id) {
  let url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`;

  let response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.results.GB;
}

async function fetchRecommendations(id) {
  let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;

  let response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.results;
}

export default async function Movie({params}) {
  const id  = params.movie;
  const movie = await fetchMovie(id);
  const recommendedMovies = await fetchRecommendations(id);
  const whereToWatch = await fetchWatchProviders(id);

  const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null;
  const backdropPath = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : null;

    return (
      <FavouritesContextProvider>
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        {posterPath && <li>
          <img className="movie-poster" src={backdropPath} alt={`${movie.title} poster`} />
        </li>}
        <div>
          {/* {whereToWatch ? whereToWatch : "This title is not available in your area"} */}
          <h2>Recommended Movies</h2>
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

  