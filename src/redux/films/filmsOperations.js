import axios from "axios";

import filmsActions from "./filmsActions";
import generateQueryString from "../../helpers/generateQueryString";
import {successAddDataNotify, successDeleteDataNotify, errorNotify} from "../../utils/notify";

axios.defaults.baseURL = "https://calm-woodland-55145.herokuapp.com";

const deleteFilm = id => dispatch => {
  dispatch(filmsActions.deleteFilmRequest());
  dispatch(filmsActions.showSpinner(true));

  axios
    .delete(`/films/${id}`)
    .then(() => {
      setTimeout(successDeleteDataNotify, 0);
      dispatch(filmsActions.deleteFilmSuccess(id));
    })
    .catch(({response}) => {
      errorNotify("Wrong deleting, check data");
      dispatch(filmsActions.deleteFilmError(response))
    })
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const getAllFilms = () => dispatch => {
  dispatch(filmsActions.getAllFilmsRequest());
  dispatch(filmsActions.showSpinner(true));

  axios
    .get("/films")
    .then(({data}) => dispatch(filmsActions.getAllFilmsSuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getAllFilmsError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const getFilmsByQuery = ({title, star}) => dispatch => {
  dispatch(filmsActions.getFilmsByQueryRequest());
  dispatch(filmsActions.showSpinner(true));
  let queryString = generateQueryString(title, star);
  axios
    .get(queryString)
    .then(({data}) => dispatch(filmsActions.getFilmsByQuerySuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const addFilm = film => dispatch => {
  dispatch(filmsActions.addFilmRequest());
  dispatch(filmsActions.showSpinner(true));
  axios
    .post("/films", film)
    .then(({data}) => {
      setTimeout(successAddDataNotify, 0);
      dispatch(filmsActions.getFilmsByQuerySuccess(data));
    })
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const addFilmsFromFiles = film => dispatch => {
  dispatch(filmsActions.addFilmsDataFromFileRequest());
  dispatch(filmsActions.showSpinner(true));

  const formData = new FormData();
  formData.append("films", film);

  axios
    .post("/films/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(({data}) => {
      setTimeout(successAddDataNotify, 0);
      dispatch(filmsActions.addFilmsDataFromFileSuccess(data));
    })
    .catch(({response}) => {
      errorNotify("Wrong adding films from file, check file");
      dispatch(filmsActions.addFilmsDataFromFileError(response))
    })
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

export default {
  deleteFilm,
  getAllFilms,
  getFilmsByQuery,
  addFilm,
  addFilmsFromFiles,
}