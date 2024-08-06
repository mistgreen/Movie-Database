import GenrePill from "./GenrePill";


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

async function fetchGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch genres');
    }
    let data = await response.json();
    console.log(data.genres);
    return data.genres;
}

export default async function Filter() {
    let genres = await fetchGenres();
    return (
      <div className="genre-list">
        {genres.map((genre) => (
          <GenrePill className="genre-pill" key={genre.id} {...genre}/>
        ))}
      </div>
    );
  }