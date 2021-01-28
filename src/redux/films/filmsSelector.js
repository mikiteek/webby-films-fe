import {createSelector} from "@reduxjs/toolkit";

const getFilms = state => state.films.items;

const getError = state => state.films.error;

export default {
  getError,
  getFilms,
}