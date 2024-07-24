export default function MovieCard(props) {
    return (
      <div key={props.id} className="movie-card">
        <ul className="movie-details">
          <li className="movie-name">{props.original_title}</li>
          {/* <li className="movie-image">{props.overview}</li> */}
        </ul>
      </div>
    );
  }