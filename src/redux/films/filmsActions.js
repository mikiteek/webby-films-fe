import {createAction} from "@reduxjs/toolkit";

const deleteFilmRequest = createAction("film/deleteRequest");
const deleteFilmSuccess = createAction("film/deleteSuccess");
const deleteFilmError = createAction("film/deleteError");

const getAllFilmsRequest = createAction("film/getAllRequest");
const getAllFilmsSuccess = createAction("film/getAllSuccess");
const getAllFilmsError = createAction("film/getAllError");

export default {
  deleteFilmRequest,
  deleteFilmSuccess,
  deleteFilmError,
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
}