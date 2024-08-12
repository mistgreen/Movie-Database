const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
  };

async function fetchMovies(urlPath) {
  console.log(urlPath.urlPath);
  

  if (!urlPath) {
    throw new Error('URL path is required to fetch movies');
  }
  let url = `https://api.themoviedb.org/3/${urlPath.urlPath}`;
  let response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Failed to fetch movies first call');
    }
  const data = await response.json();
  return data.results;
};

async function fetchImdbId(movieId) {
  if (!movieId) {
    throw new Error('movieId is required');
  }

  let tmdbUrl = `https://api.themoviedb.org/3/movie/${movieId}/external_ids`;
  let response = await fetch(tmdbUrl, options);

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  const data = await response.json();
  return data.imdb_id;
}

async function fetchImdbRating(imdbId){
  // if (!imdbId) {
  //   throw new Error('imdbId is required');
  // }

  // let omdbUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;
  // let response = await fetch(omdbUrl, options);

  // if (!response.ok) {
  //   throw new Error('Failed to fetch imdb details');
  // }
  // const data = await response.json();
  // return data.imdbRating;
  return 1;
}

export { fetchMovies, fetchImdbId, fetchImdbRating}