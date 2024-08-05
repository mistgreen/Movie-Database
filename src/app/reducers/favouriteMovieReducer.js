export const favouriteMovieReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FAVOURITE':
        return [...state, {movie: action.movie}]
      case 'REMOVE_FAVOURITE':
        return state.filter(movie => movie.id === action.id);
      default:
        return state;
    }
  } 

