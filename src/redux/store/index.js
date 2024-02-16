import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReducers from "../reducers/music";

const globalReducer = combineReducers({
  music: musicReducers,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
