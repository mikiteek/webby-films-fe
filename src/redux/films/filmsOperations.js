import axios from "axios";

import filmsActions from "./filmsActions";
import generateQueryString from "../../helpers/generateQueryString";

axios.defaults.baseURL = "https://calm-woodland-55145.herokuapp.com";

const deleteFilm = id => dispatch => {
  dispatch(filmsActions.deleteFilmRequest());

  axios
    .delete(`/films/${id}`)
    .then(() => dispatch(filmsActions.deleteFilmSuccess(id)))
    .catch(({response}) => dispatch(filmsActions.deleteFilmError(response)))
}

const getAllFilms = () => dispatch => {
  dispatch(filmsActions.getAllFilmsRequest());

  axios
    .get("/films")
    .then(({data}) => dispatch(filmsActions.getAllFilmsSuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getAllFilmsError(response)))
}

const getFilmsByQuery = ({title, star}) => dispatch => {
  dispatch(filmsActions.getFilmsByQueryRequest());
  let queryString = generateQueryString(title, star);
  axios
    .get(queryString)
    .then(({data}) => dispatch(filmsActions.getFilmsByQuerySuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
}

const addFilm = film => dispatch => {
  dispatch(filmsActions.addFilmRequest());

  axios
    .post("/films", film)
    .then(({data}) => dispatch(filmsActions.getFilmsByQuerySuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
}

export default {
  deleteFilm,
  getAllFilms,
  getFilmsByQuery,
  addFilm,
}