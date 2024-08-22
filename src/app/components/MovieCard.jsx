import LikeButton from "./LikeButton";
import Link from "next/link";
import formatDate from "../helpers/dateFormatter";

export default function MovieCard(props) {
  const posterPath = props.poster_path ? `https://image.tmdb.org/t/p/w500/${props.poster_path}` : null;
  const releaseYear = formatDate(props.release_date);


  return (
    <div key={props.id} className="movie-card">
      <div className="movie-card-wrapper">
        
          <ul className="movie-details">
            <Link href={`/${props.id}`}>
            {posterPath && <li>
              <img className="movie-poster" src={posterPath} alt={`${props.title} poster`} />
            </li>}
            </Link>
            <div className="movie-background-box">
              <div className="movie-text-box">
                <Link href={`/${props.id}`}>
                <li className="movie-name">{props.title}</li>
                <li className="movie-release-year">{releaseYear}</li>
                <li className="movie-imdb-rating">IMDB Score: {props.imdbRating}</li>
                </Link>
                <div className="bookmark-button">
          <LikeButton {...props} />
        </div>
              </div>
            </div>
          </ul>
        
        
      </div>
    </div>
  );
}

