import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import filmsActions from "./filmsActions";
import {errorNotify} from "../../utils/notify";

const itemsInit = {};
const items = createReducer(itemsInit, {
  [filmsActions.deleteFilmSuccess]: (state, {payload}) => {
    state.docs = state.docs.filter(item => item._id !== payload);
    return state;
  },
  [filmsActions.getAllFilmsSuccess]: (state, {payload}) => payload,
  [filmsActions.getFilmsByQuerySuccess]: (state, {payload}) => payload,
});

const errorInit = {};
const error = createReducer(errorInit, {
  [filmsActions.deleteFilmError]: (_, {payload}) => payload,
  [filmsActions.getAllFilmsError]: (_, {payload}) => payload,
  [filmsActions.getFilmsByQueryError]: (_, {payload}) => {
    if (payload.status === 404) {
      errorNotify("Film is not found!!!");
    }
    return payload;
  },
  [filmsActions.addFilmError]: (_, payload) => payload,
  [filmsActions.addFilmsDataFromFileError]: (_, {payload}) => payload,
});

const spinnerInit = false;
const spinner = createReducer(spinnerInit, {
  [filmsActions.showSpinner]: (state, {payload}) => payload,
});

const searchParamsInit = {};
const searchParams = createReducer(searchParamsInit, {
  [filmsActions.searchParams]: (state, {payload}) => payload,
});

export default combineReducers({
  items,
  error,
  spinner,
  searchParams,
})