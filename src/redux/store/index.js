import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducers from "../reducers/music";
import favReducer from "../reducers/favorites";

const globalReducer = combineReducers({
  music: musicReducers,
  fav: favReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
