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
      return dispatch(filmsActions.deleteFilmSuccess(id));
    })
    .catch(({response}) => {
      errorNotify("Wrong deleting, check data");
      dispatch(filmsActions.deleteFilmError(response))
    })
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const getAllFilms = ({page=1, limit=10}) => dispatch => {
  dispatch(filmsActions.getAllFilmsRequest());
  dispatch(filmsActions.showSpinner(true));
  axios
    .get(`/films?page=${page}&limit=${limit}`)
    .then(({data}) => dispatch(filmsActions.getAllFilmsSuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getAllFilmsError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const getFilmsByQuery = ({title, star, page=1, limit=10}) => dispatch => {
  dispatch(filmsActions.getFilmsByQueryRequest());
  dispatch(filmsActions.showSpinner(true));
  let queryString = generateQueryString(title, star, page, limit);
  axios
    .get(queryString)
    .then(({data}) => dispatch(filmsActions.getFilmsByQuerySuccess(data)))
    .catch(({response}) => dispatch(filmsActions.getFilmsByQueryError(response)))
    .finally(() => dispatch(filmsActions.showSpinner(false)));
}

const addFilm = film => async dispatch => {
  try {
    dispatch(filmsActions.addFilmRequest());
    dispatch(filmsActions.showSpinner(true));
    const {data} = await axios.post("/films", film);

    setTimeout(successAddDataNotify, 0);
    dispatch(filmsActions.addFilmSuccess(data));
    return data;
  }
  catch ({response}) {
    dispatch(filmsActions.addFilmError(response));
    if (response.status === 409) {
      errorNotify("Such film already exist!!!")
    }
  }
  finally {
    dispatch(filmsActions.showSpinner(false))
  }
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
      return dispatch(filmsActions.addFilmsDataFromFileSuccess(data));
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