import React from 'react';

const MovieListTwo = ({ favourites }) => {
  return (
    <div>
      {favourites.length > 0 ? (
        favourites.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))
      ) : (
        <p>No favourites available</p>
      )}
    </div>
  );
};

export default MovieListTwo;