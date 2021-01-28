import {configureStore} from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsReducer";

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;