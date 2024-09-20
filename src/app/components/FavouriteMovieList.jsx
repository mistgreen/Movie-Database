import MovieCard from './MovieCard';

export default function FavouriteMovieList ({ favourites = [] }) {

  return (
    <div className='inner-movie-list'>
      {favourites.length ? (
        
        favourites.map(({movie}) => (
          
          <MovieCard className="movie-card" key={movie.id} {...movie}/>
        ))
      ) : (
        <p>You haven&apos;t added any movies to your watchlist yet...</p>
      )}
    </div>
  );
};
