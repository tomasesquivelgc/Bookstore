import { configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducers,
    categories: categoriesReducer,
  },
});

export default store;
