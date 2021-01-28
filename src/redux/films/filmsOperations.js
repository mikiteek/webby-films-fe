import axios from "axios";

import filmsActions from "./filmsActions";

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

export default {
  deleteFilm,
  getAllFilms,
}