import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import filmsReducer from "./films/filmsReducer";

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
  middleware: getDefaultMiddleware({serializableCheck: false}),
});

export default store;