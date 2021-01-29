import axios from "axios";

import filmsActions from "./filmsActions";
import generateQueryString from "../../helpers/generateQueryString";

axios.defaults.baseURL = "https://calm-woodland-55145.herokuapp.com";

const deleteFilm = id => dispatch => {
  dispatch(filmsActions.deleteFilmRequest());
  dispatch(filmsActions.showSpinner(true));

  axios
    .delete(`/films/${id}`)
    .then(() => dispatch(filmsActions.deleteFilmSuccess(id)))
    .catch(({response}) => dispatch(filmsActions.deleteFilmError(response)))
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
    .then(({data}) => dispatch(filmsActions.getFilmsByQuerySuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

export default {
  deleteFilm,
  getAllFilms,
  getFilmsByQuery,
  addFilm,
}