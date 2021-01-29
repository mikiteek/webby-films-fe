import {createSelector} from "@reduxjs/toolkit";

const getFilms = state => state.films.items;

const getError = state => state.films.error;

const getSpinner = state => state.films.spinner;

export default {
  getError,
  getFilms,
  getSpinner,
}