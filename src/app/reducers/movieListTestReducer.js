export const movieListTestReducer = (state, action) => {

    switch (action.type) {
      case 'ADD_GENRE':
        return [...state, {id: action.id}]
      case 'REMOVE_GENRE':
        return state.filter(genre => genre.id !== action.id);
      default:
        return state;
    }
  } 