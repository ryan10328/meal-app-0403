import { createSlice } from "@reduxjs/toolkit";

export type FavoritesState = {
  ids: string[];
};

const state: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: state,
  reducers: {
    add: (state, action) => {
      state.ids.push(action.payload.id);
    },
    remove: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const { add, remove } = favoritesSlice.actions;
