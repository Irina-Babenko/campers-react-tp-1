import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import favoritesReducer from "./favoritesCamper/favoritesSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
