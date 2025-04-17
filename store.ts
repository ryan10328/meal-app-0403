import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
