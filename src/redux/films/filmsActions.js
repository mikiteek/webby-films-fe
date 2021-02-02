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

const addFilmsDataFromFileRequest = createAction("films/addFromDataRequest");
const addFilmsDataFromFileSuccess = createAction("films/addFromDataSuccess");
const addFilmsDataFromFileError = createAction("films/addFromDataError");

const showSpinner = createAction("spinner/showSpinner");

const searchParams = createAction("search/searchParams");

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
  addFilmsDataFromFileRequest,
  addFilmsDataFromFileSuccess,
  addFilmsDataFromFileError,
  showSpinner,
  searchParams,
}