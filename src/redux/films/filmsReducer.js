import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import filmsActions from "./filmsActions";

const itemsInit = [];
const items = createReducer(itemsInit, {
  [filmsActions.deleteFilmSuccess]: (state, {payload}) => state.filter(film => film._id !== payload),
  [filmsActions.getAllFilmsSuccess]: (state, {payload}) => payload,
  [filmsActions.getFilmsByQuerySuccess]: (state, {payload}) => payload,
  [filmsActions.addFilmSuccess]: (state, {payload}) => state.push(payload),
});

const errorInit = {};
const error = createReducer(errorInit, {
  [filmsActions.deleteFilmError]: (_, {payload}) => payload,
  [filmsActions.getAllFilmsError]: (_, {payload}) => payload,
  [filmsActions.getFilmsByQueryError]: (_, {payload}) => payload,
  [filmsActions.addFilmError]: (_, payload) => payload,
});

export default combineReducers({
  items,
  error,
})