import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import { HYDRATE } from 'next-redux-wrapper';

export interface ResourceSlide {
  filterValue: string;
}

// Initial state
const initialState: ResourceSlide = {
  filterValue: 'all',
};

// Actual Slice
export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    // Action to set the filter value
    setFilterValue(state: ResourceSlide, action) {
      return {
        ...state,
        filterValue: action.payload,
      };
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state: any, action: any) => ({
      ...state,
      ...action.payload.resources,
    }),
  },
});

export const { setFilterValue } = resourcesSlice.actions;

export const selectFilterValue = (state: AppState) =>
  state.resources.filterValue;

export default resourcesSlice.reducer;
