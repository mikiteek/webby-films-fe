import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import filmsActions from "./filmsActions";

const itemsInit = [];
const items = createReducer(itemsInit, {
  [filmsActions.deleteFilmSuccess]: (state, {payload}) => state.filter(film => film._id !== payload),
});

export default combineReducers({
  items,
})