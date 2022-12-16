import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
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
      state.categoryId = Number(action.payload.categoryId);
    },
    setSearchValue (state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = state => state.filter;
export const selectSort = state => state.filter.sort;

export const { setCategory, setSort, setFilter, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
