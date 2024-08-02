import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import Link from "next/link";

export default async function MovieCard(props) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
    }
  };

  const posterPath = props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : null;

  return (
    <div key={props.id} className="movie-card">
      <Link href="/movie">
      <ul className="movie-details">
        {posterPath && <li>
          <img className="movie-poster" src={posterPath} alt={`${props.title} poster`} />
        </li>}
        <div className="movie-text-box">
          <li className="movie-name">{props.title}</li>
          <li className="movie-release-year">{props.release_date}</li>
          <li className="movie-imdb-rating">IMDB Rating: {props.imdbRating}</li>
        </div>
      </ul>
      </Link>
      <LikeButton {...props} />
      <ShareButton />
    </div>
  );
}