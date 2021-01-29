import {createAction} from "@reduxjs/toolkit";

const deleteFilmRequest = createAction("film/deleteRequest");
const deleteFilmSuccess = createAction("film/deleteSuccess");
const deleteFilmError = createAction("film/deleteError");

const getAllFilmsRequest = createAction("film/getAllRequest");
const getAllFilmsSuccess = createAction("film/getAllSuccess");
const getAllFilmsError = createAction("film/getAllError");

const getFilmsByQueryRequest = createAction("film/getByQueryRequest");
const getFilmsByQuerySuccess = createAction("film/getByQuerySuccess");
const getFilmsByQueryError = createAction("film/getByQueryError");

const addFilmRequest = createAction("film/addFilmRequest");
const addFilmSuccess = createAction("film/addFilmSuccess");
const addFilmError = createAction("film/addFilmError");

export default {
  deleteFilmRequest,
  deleteFilmSuccess,
  deleteFilmError,
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
  getFilmsByQueryRequest,
  getFilmsByQuerySuccess,
  getFilmsByQueryError,
  addFilmRequest,
  addFilmSuccess,
  addFilmError,
}