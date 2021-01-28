import {createAction} from "@reduxjs/toolkit";

const deleteFilmRequest = createAction("film/deleteRequest");
const deleteFilmSuccess = createAction("film/deleteSuccess");
const deleteFilmError = createAction("film/deleteError");

export default {
  deleteFilmRequest,
  deleteFilmSuccess,
  deleteFilmError,
}