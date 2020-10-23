//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVORITE = 'ADD_To_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavorite(movie) {
  return {
    type: ADD_TO_FAVORITE,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVORITE,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=e6182d5&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log('movie', movie);

        //dispatch an action
        dispatch(addMovieSearchResults(movie));
      });
  };
}

export function addMovieSearchResults(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
