import MovieCard from './MovieCard';

export default function FavouriteMovieList ({ favourites = [] }) {

  return (
    <div className='movie-list'>
      {favourites.length ? (
        
        favourites.map(({movie}) => (
          
          <MovieCard className="movie-card" key={movie.id} {...movie}/>
        ))
      ) : (
        <p>You haven't added any favourites yet...</p>
      )}
    </div>
  );
};
