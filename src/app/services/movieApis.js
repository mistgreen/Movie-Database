const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };
  
export async function fetchMovie(id) {
    let url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    
    let response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
    const data = await response.json();
    return data;
  };
  
export async function fetchWatchProviders(id) {
  console.log(id.id);
    let url = `https://api.themoviedb.org/3/movie/${id.id}/watch/providers`;
    
    let response = await fetch(url, options);
    if (!response.ok) {
      
      throw new Error('Failed to fetch watch providers');
    }
    const data = await response.json();
    console.log(data.results.GB);
    // return data.results.GB;
  }
  
export async function fetchRecommendations(id) {
    let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  
    let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }
    const data = await response.json();
    return data.results;
  }

  export async function fetchAllMovieData(id) {
    let url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cwatch%2Fproviders%2Cexternal_ids%2Crecommendations&language=en-US`;
    let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to get all movie data');
    }
    const data = await response.json();
    return data;
  }