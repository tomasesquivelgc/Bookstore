import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

// Custom reducer function that returns the status
export const statusReducer = (state) => state.status;

export default categoriesSlice.reducer;
