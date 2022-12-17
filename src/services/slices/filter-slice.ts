import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

type Sort = {
  name: string,
  sortProperty: 'rating' | 'price' | 'title',
}

interface FilterSliceState {
  categoryId: number,
  searchValue: string,
  sort: Sort,
}

const initialState: FilterSliceState = {
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
    setCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategory, setSort, setFilter, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
