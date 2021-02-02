const getFilms = state => state.films.items;

const getError = state => state.films.error;

const getSpinner = state => state.films.spinner;

const getSearchParams = state => state.films.searchParams;

export default {
  getError,
  getFilms,
  getSpinner,
  getSearchParams,
}