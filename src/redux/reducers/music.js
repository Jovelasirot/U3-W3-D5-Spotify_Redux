import {
  FETCH_MUSIC_FAILURE,
  FETCH_MUSIC_SUCCESS,
  TURN_OFF_LOADING,
  TURN_ON_LOADING,
  SONG_SELECTED,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions";

const initialState = {
  results: [],
  error: null,
  loading: false,
  selected: {},
  favorites: [],
};

const musicReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
        error: null,
      };

    case FETCH_MUSIC_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case TURN_ON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TURN_OFF_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SONG_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((song) => song.id !== action.payload),
      };

    default:
      return state;
  }
};

export default musicReducers;
