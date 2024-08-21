import LikeButton from "./LikeButton";
import Link from "next/link";

export default function MovieCard(props) {
  const posterPath = props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : null;
  function formatDate(releaseDate) {
    const date = new Date(releaseDate);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensures two digits, months are 0-indexed
    const year = date.getFullYear();
    return `${year}`;
  }


  return (
    <div key={props.id} className="movie-card">
      <Link href={`/${props.id}`}>
      <ul className="movie-details">
        {posterPath && <li>
          <img className="movie-poster" src={posterPath} alt={`${props.title} poster`} />
        </li>}
        <div className="movie-background-box">
          <div className="movie-text-box">
          <li className="movie-name">{props.title}</li>
          <li className="movie-release-year">{formatDate(props.release_date)}</li>
          <li className="movie-imdb-rating">IMDB Score: {props.imdbRating}</li>
        </div>
        
        </div>
      </ul>
      </Link>
      <LikeButton {...props} />
    </div>
  );
}

