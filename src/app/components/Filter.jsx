import GenreFilterContextProvider from "../contexts/GenreFilterContext";
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
    return data.genres;
}

export default async function Filter() {
  const genres = await fetchGenres(); 

  return (
    <GenreFilterContextProvider>
      <div className="genre-list">
        {genres.map((genre) => (
          <GenrePill className="genre-pill" key={genre.id} {...genre} />
        ))}
      </div>
    </GenreFilterContextProvider>
  );
}