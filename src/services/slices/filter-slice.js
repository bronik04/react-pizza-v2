import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload;
    },
    setSort (state, action) {
      state.sort = action.payload;
    },
    setFilter (state, action) {
      state.sort = action.payload.sort;
      state.categoryId = action.payload.categoryId;
    }
  },
});

export const { setCategory, setSort, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
